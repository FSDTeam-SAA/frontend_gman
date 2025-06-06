export interface User {
  _id: string
  name: string
  email: string
  username: string
  role: "user" | "seller" | "admin"
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
