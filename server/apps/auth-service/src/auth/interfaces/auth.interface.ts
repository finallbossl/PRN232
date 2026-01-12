// gRPC Interfaces for Auth Service
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ValidateUserRequest {
  email: string;
  password: string;
}

export interface GetProfileRequest {
  userId: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterResponse {
  statusCode: number;
  message: string;
  user?: UserData;
}

export interface LoginResponse {
  statusCode: number;
  message: string;
  access_token: string;
  user?: UserData;
}

export interface ValidateUserResponse {
  valid: boolean;
  user?: UserData;
}

export interface GetProfileResponse {
  statusCode: number;
  user?: UserData;
}
