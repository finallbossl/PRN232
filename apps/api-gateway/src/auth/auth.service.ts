import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { RegisterDto, LoginDto, AuthResponse } from '@goride/shared';

/**
 * Interface for Auth gRPC Service
 */
interface AuthGrpcService {
  Register(data: RegisterDto): Observable<AuthResponse>;
  Login(data: LoginDto): Observable<AuthResponse>;
  ValidateUser(data: { userId: string }): Observable<any>;
  RefreshToken(data: { refreshToken: string }): Observable<{ accessToken: string }>;
}

/**
 * Auth Service - API Gateway
 * Communicates with Auth Microservice via gRPC
 */
@Injectable()
export class AuthService implements OnModuleInit {
  private authGrpcService: AuthGrpcService;

  constructor(
    @Inject('AUTH_PACKAGE') private client: ClientGrpc,
  ) { }

  onModuleInit() {
    this.authGrpcService = this.client.getService<AuthGrpcService>('AuthService');
  }

  /**
   * Register a new user via gRPC
   */
  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    return firstValueFrom(this.authGrpcService.Register(registerDto));
  }

  /**
   * Login user via gRPC
   */
  async login(loginDto: LoginDto): Promise<AuthResponse> {
    return firstValueFrom(this.authGrpcService.Login(loginDto));
  }

  /**
   * Validate user by ID via gRPC
   */
  async validateUser(userId: string): Promise<any> {
    return firstValueFrom(this.authGrpcService.ValidateUser({ userId }));
  }

  /**
   * Refresh access token via gRPC
   */
  async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
    return firstValueFrom(this.authGrpcService.RefreshToken({ refreshToken }));
  }
}
