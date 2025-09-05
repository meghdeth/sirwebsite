import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface AuthRequest extends Request {
  userId?: number
}

export const authenticateAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({ success: false, error: 'Access token required' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number }
    req.userId = decoded.userId
    
    next()
  } catch (error) {
    res.status(401).json({ success: false, error: 'Invalid token' })
  }
}

export { AuthRequest }