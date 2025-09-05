import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { initializeDatabase } from "./models/database"

// Import routes
import authRoutes from "./routes/auth"
import adminRoutes from "./routes/admin"
import contactRoutes from "./routes/contact"
import newsRoutes from "./routes/news"
import galleryRoutes from "./routes/gallery"
import publicationsRoutes from "./routes/publications"
import patentsRoutes from "./routes/patents"
import conferencesRoutes from "./routes/conferences"
import teachingRoutes from "./routes/teaching"
import researchRoutes from "./routes/research"
import groupRoutes from "./routes/group"
import piRoutes from "./routes/piRoutes"
import newJoinersRoutes from "./routes/newJoiners"
import recentUpdatesRoutes from "./routes/recentUpdates"
import atAGlanceRoutes from "./routes/atAGlance"
import homeRoutes from "./routes/home"

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}))

app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// Static files for uploads
app.use("/uploads", express.static(path.join(__dirname, "../uploads")))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/news", newsRoutes)
app.use("/api/gallery", galleryRoutes)
app.use("/api/publications", publicationsRoutes)
app.use("/api/patents", patentsRoutes)
app.use("/api/conferences", conferencesRoutes)
app.use("/api/teaching", teachingRoutes)
app.use("/api/research", researchRoutes)
app.use("/api/group", groupRoutes)
app.use("/api/pi", piRoutes)
app.use("/api/home", homeRoutes)
app.use("/api/new-joiners", newJoinersRoutes)
app.use("/api/recent-updates", recentUpdatesRoutes)
app.use("/api/at-a-glance", atAGlanceRoutes)

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" })
})

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Error:", err)
  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === "production" ? "Internal server error" : err.message
  })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found"
  })
})

// Initialize database and start server
const startServer = async () => {
  try {
    await initializeDatabase()
    
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`)
      console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL}`)
      console.log(`💾 Database: ${process.env.DB_PATH}`)
    })
  } catch (error) {
    console.error("Failed to start server:", error)
    process.exit(1)
  }
}

startServer()
