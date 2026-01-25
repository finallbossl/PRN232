// Auth DTOs
export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token?: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

// Motorbike DTOs
export interface CreateMotorbikeDto {
  name: string;
  type: string;
  pricePerDay: number;
  description?: string;
  licensePlate: string;
  year?: number;
  images: string[];
  fuelCapacity?: string;
  engineSize?: string;
}

export interface UpdateMotorbikeDto {
  name?: string;
  pricePerDay?: number;
  description?: string;
  status?: string;
  images?: string[];
}

export interface MotorbikeFilterDto {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}

// Rental DTOs
export interface CreateRentalDto {
  motorbikeId: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  pickupLocation: string;
  returnLocation: string;
  notes?: string;
}

export interface UpdateRentalStatusDto {
  status: string;
}

// Payment DTOs
export interface CreatePaymentDto {
  rentalId: string;
  method: string;
  transactionId?: string;
  notes?: string;
}

export interface UpdatePaymentStatusDto {
  status: string;
  transactionDate?: string;
}

// Review DTOs
export interface CreateReviewDto {
  rentalId: string;
  rating: number; // 1-5
  comment?: string;
}

// Chatbot DTOs
export interface ChatMessageDto {
  message: string;
  userId?: string;
}
