import { Express } from 'express';

type JwtPayload = {
  sub: string;
  name?: string;
  email?: string;
  picture?: null;
  iat?: number;
};

declare global {
  namespace Express {
    interface User extends JwtPayload {}
  }
}
