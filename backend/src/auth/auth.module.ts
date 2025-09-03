import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from './strategies/access-token.strategy';

@Module({
  imports: [PassportModule, JwtModule.register({})],
  controllers: [],
  providers: [AccessTokenStrategy],
})
export class AuthModule {}
