const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const apiCall = async (endpoint: string, options?: RequestInit) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders: Record<string, string> = {};
  
  // Only set Content-Type for non-FormData requests
  if (!(options?.body instanceof FormData)) {
    defaultHeaders['Content-Type'] = 'application/json';
  }
  
  const defaultOptions: RequestInit = {
    headers: {
      ...defaultHeaders,
      ...options?.headers,
    },
    ...options,
  };

  return fetch(url, defaultOptions);
};

export { API_BASE_URL };