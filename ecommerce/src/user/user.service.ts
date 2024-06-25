import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserSignUp } from './dto/user-signup.dto';
import { UserSignIn } from './dto/user-signin.dto';
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken';
@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) { }

  async signup(userSignUpDTO: UserSignUp): Promise<UserEntity> {
    // const user = this.usersRepository.create(userSignUp);
    const userExists = await this.findUserByEmail(userSignUpDTO.email)
    if (userExists) throw new HttpException("User already exists", HttpStatus.BAD_REQUEST)
    // hash the password 
    userSignUpDTO.password = await hash(userSignUpDTO.password, 10)
    const user = this.usersRepository.create(userSignUpDTO)
    return await this.usersRepository.save(user);

  }

  async signin(userSignInDTO: UserSignIn) {
    const userExist = await this.usersRepository.createQueryBuilder('users').addSelect('users.password')
      .where('users.email =:email', { email: userSignInDTO.email }).getOne();
    if (!userExist) throw new BadRequestException('Bad credentials')
    const matchPassword = await compare(userSignInDTO.password, userExist.password);
    if (!matchPassword) throw new BadRequestException('Bad credentials')
      delete userExist.password ;
    return userExist ;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return await this.usersRepository.findOneBy({ email });
  }

  async findUserByPassword(password: string): Promise<UserEntity> {
    return await this.usersRepository.findOneBy({ password });
  }

  async accessToken(user : UserEntity){
    return sign({id: user.id , email: user.email},
       process.env.ACCESS_TOKEN,
       {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME})
  }
}
