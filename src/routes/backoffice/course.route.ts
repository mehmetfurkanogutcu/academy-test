import { Router } from 'express';
import { CourseController } from '@controllers/course.controller';
// import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
// import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class CourseRoute implements Routes {
  public path = '/course';
  public router = Router();
  public course = new CourseController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/list`, this.course.getCourses);
    this.router.post(`${this.path}/update`, this.course.updateCourseById);
    // this.router.get(`${this.path}/:id`, this.user.getUserById);
    // this.router.post(`${this.path}`, ValidationMiddleware(CreateUserDto, 'body'), this.user.createUser);
    // this.router.put(`${this.path}/:id`, ValidationMiddleware(CreateUserDto, 'body', true), this.user.updateUser);
    // this.router.delete(`${this.path}/:id`, this.user.deleteUser);
  }
}
