import { User, UserRole } from './user.entity';

export interface CreateUserData {
  email: string;
  name: string;
  passwordHash: string;
  role: UserRole;
}

export interface UserRepository {
  create(data: CreateUserData): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}

