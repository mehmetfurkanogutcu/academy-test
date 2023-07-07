import { Router } from 'express';
import { UserController } from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { IRoute } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public userController = new UserController();


  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.userController.getUsers);
    this.router.get(`${this.path}/:id`, this.userController.getUserById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateUserDto, 'body'), this.userController.createUser);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(CreateUserDto, 'body', true), this.userController.updateUser);
    this.router.delete(`${this.path}/:id`, this.userController.deleteUser);
    this.router.put(`${this.path}/updateAdminPermissionGroup`, this.userController.updateAdminPermissionGroup);
  }
}
