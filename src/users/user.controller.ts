import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body('username') username: string, @Body('password') password: string) {
    await this.userService.create(username, password);
    return { message: 'User registered successfully' };
  }

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    const user = await this.userService.findByUsername(username);

    if (!user || user.password !== password) {
      throw new Error('Invalid username or password');
    }

    // Implement JWT generation here
    const token = 'your-generated-jwt-token';

    return { token };
  }
}
