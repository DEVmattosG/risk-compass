import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserData, UserRepository } from '@domain/user/user.repository';
import { User } from '@domain/user/user.entity';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private mapToDomain(record: any): User {
    return new User({
      id: record.id,
      email: record.email,
      name: record.name,
      passwordHash: record.passwordHash,
      role: record.role,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  async create(data: CreateUserData): Promise<User> {
    const record = await this.prisma.user.create({ data });
    return this.mapToDomain(record);
  }

  async findByEmail(email: string): Promise<User | null> {
    const record = await this.prisma.user.findUnique({ where: { email } });
    return record ? this.mapToDomain(record) : null;
  }

  async findById(id: string): Promise<User | null> {
    const record = await this.prisma.user.findUnique({ where: { id } });
    return record ? this.mapToDomain(record) : null;
  }
}

