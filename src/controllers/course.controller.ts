import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Course } from '@interfaces/course.interface';
import { CourseService } from '@services/course.service';
import { UpdateCourseDto } from '@dtos/courses.dto';

export class CourseController {
  public course = Container.get(CourseService);

  public getCourses = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const filter
      const filterData = req.body;
      const findAllCoursesData: Course[] = await this.course.findCourses();
      console.log('f c : ', findAllCoursesData);
      

      res.status(200).json({ data: findAllCoursesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  //id ve course //route - controller- service - dto
  public updateCourseById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filterData = req.body;
      const updateCourseData: Course = await this.course.updateCourseById(filterData);

      res.status(200).json({data: updateCourseData, message: 'update'});
    } catch (error) {
      next(error);
    }
  };

  // public getUserById = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const findOneUserData: User = await this.user.findUserById(userId);

  //     res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public createUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userData: User = req.body;
  //     const createUserData: User = await this.user.createUser(userData);

  //     res.status(201).json({ data: createUserData, message: 'created' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public updateUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const userData: User = req.body;
  //     const updateUserData: User = await this.user.updateUser(userId, userData);

  //     res.status(200).json({ data: updateUserData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const deleteUserData: User = await this.user.deleteUser(userId);

  //     res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
