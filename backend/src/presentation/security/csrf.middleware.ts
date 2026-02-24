import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { randomBytes } from 'crypto';

@Injectable()
export class CsrfMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    const method = req.method.toUpperCase();
    const isSafeMethod = ['GET', 'HEAD', 'OPTIONS'].includes(method);

    const csrfCookie = (req.cookies as any)['csrf_token'];
    const csrfHeader = req.headers['x-csrf-token'] as string | undefined;

    if (!csrfCookie) {
      const token = randomBytes(32).toString('hex');
      res.setCookie('csrf_token', token, {
        httpOnly: false,
        secure: true,
        sameSite: 'strict',
        path: '/',
      });
    }

    if (!isSafeMethod) {
      if (!csrfCookie || !csrfHeader || csrfCookie !== csrfHeader) {
        throw new ForbiddenException('Invalid CSRF token');
      }
    }

    next();
  }
}

