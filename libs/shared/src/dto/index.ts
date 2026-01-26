// Auth DTOs
export * from './auth.dto';

// Motorbike DTOs
export * from './motorbike.dto';

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
