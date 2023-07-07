import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { AdminUser, User } from '@interfaces/users.interface';
import { UserService } from '@services/users.service';
import { AdminUserModel } from '@/models/adminUsers.model';
import { StatusCodes } from 'http-status-codes';
import { ErrorDataResult, SuccessDataResult } from '@/utils/Result/dataResult';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = Container.get(UserService);
  }

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    console.log('asd');

    try {
      const findAllUsersData: User[] = await this.userService.findAllUser();

      res.status(StatusCodes.OK).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      console.log('er', error);

      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const findOneUserData: User = await this.userService.findUserById(userId);

      res.status(StatusCodes.OK).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const createUserData: User = await this.userService.createUser(userData);

      res.status(StatusCodes.CREATED).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const userData: User = req.body;
      const updateUserData: User = await this.userService.updateUser(userId, userData);

      res.status(StatusCodes.OK).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction
