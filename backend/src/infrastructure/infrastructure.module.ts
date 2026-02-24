import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { RiskPrismaRepository } from './repositories/risk-prisma.repository';
import { UserPrismaRepository } from './repositories/user-prisma.repository';
import { PasswordHasherService } from './security/password-hasher.service';
import { LoggerService } from './logging/logger.service';
import { RiskRepository } from '@domain/risk/risk.repository';
import { UserRepository } from '@domain/user/user.repository';

@Module({
  providers: [
    PrismaService,
    LoggerService,
    PasswordHasherService,
    {
      provide: 'RiskRepository',
      useClass: RiskPrismaRepository,
    },
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
  ],
  exports: ['RiskRepository', 'UserRepository', PrismaService, LoggerService, PasswordHasherService],
})
export class InfrastructureModule {}

