import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSignUp } from './dto/user-signup.dto';
import { UserSignIn } from './dto/user-signin.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post('signup')
  async signup(@Body() userSignUpDTO : UserSignUp){
    console.log(userSignUpDTO);
    return {user: await this.userService.signup(userSignUpDTO)};
  }

  @Post('signin')
  async signin(@Body() userSignInDTO : UserSignIn){
      const user = await this.userService.signin(userSignInDTO);
      const accessToken = await this.userService.accessToken(user);
      return {accessToken, user};
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
