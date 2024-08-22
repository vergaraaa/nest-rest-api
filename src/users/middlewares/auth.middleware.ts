import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new UnauthorizedException();
    }

    if (authorization !== 'xyz123') {
      throw new ForbiddenException();
    }

    next();
  }
}
