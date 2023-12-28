// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './users/user.module';
import { MongooseModule } from './mongoose.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    MongooseModule,
    UserModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [],
  providers: [AuthService],
})
export class AppModule {}
