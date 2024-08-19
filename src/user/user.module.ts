import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user/user';
@Module({
  imports: [TypeOrmModule.forFeature([User])], // Injecte UserRepository
  providers: [UserService],
  controllers: [],
  exports: [UserService], // Si le UserService est utilisé ailleurs
})
export class UserModule {}
