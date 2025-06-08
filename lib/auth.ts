
// const API_BASE_URL = "https://gman54-backend.onrender.com/api/v1"

export interface User {
  _id: string
  name: string
  email: string
  username: string
  role: "buyer" | "seller" | "admin"
  avatar: {
    public_id: string
    url: string
  }
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  verificationInfo: {
    verified: boolean
  }
}

export interface AuthResponse {
  success: boolean
  message: string
  data?: {
    accessToken: string
    refreshToken: string
    role: string
    _id: string
  }
  user?: User
  accessToken?: string
  refreshToken?: string
}

export const authApi = {
  async register(userData: {
    name: string
    email: string
    password: string
    role: string
    phone?: string
    address?: {
      street: string
      city: string
      state: string
      zipCode: string
    }
  }): Promise<AuthResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    return response.json()
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    return response.json()
  },

  async forgotPassword(email: string): Promise<AuthResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
    return response.json()
  },

  async resetPassword(token: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, password }),
    })
    return response.json()
  },

  async verifyOTP(email: string, otp: string): Promise<AuthResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    })
    return response.json()
  },

  async applyAsSeller(formData: FormData): Promise<AuthResponse> {
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1]

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/seller/apply`, {
      method: "POST",
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: formData,
    })
    return response.json()
  },
}

export const setAuthCookies = (accessToken: string, refreshToken: string, user: User) => {
  document.cookie = `accessToken=${accessToken}; path=/; max-age=${60 * 60 * 24 * 7}`
  document.cookie = `refreshToken=${refreshToken}; path=/; max-age=${60 * 60 * 24 * 30}`
  document.cookie = `userRole=${user.role}; path=/; max-age=${60 * 60 * 24 * 30}`
  document.cookie = `userId=${user._id}; path=/; max-age=${60 * 60 * 24 * 30}`
}

export const clearAuthCookies = () => {
  document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  document.cookie = "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  document.cookie = "userRole=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  document.cookie = "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
}
