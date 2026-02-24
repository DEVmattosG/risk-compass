import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const secret = process.env.JWT_ACCESS_SECRET || 'dev-secret-key-please-change-in-production';
    if (!process.env.JWT_ACCESS_SECRET) {
      console.warn('⚠️ WARNING: JWT_ACCESS_SECRET not set, using default dev key');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, role: payload.role };
  }
}

