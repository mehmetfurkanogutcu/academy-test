import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Course } from '@interfaces/course.interface';
import { CourseModel } from '@models/course.model';
import { UpdateCourseDto } from '@dtos/courses.dto';

@Service()
export class CourseService {
  public async findCourses(): Promise<Course[]> {
    const courses: Course[] = await CourseModel.find();
    return courses;
  }

  public async getCourseById(courseId: string): Promise<Course> {
    const findCourse: Course = await CourseModel.findOne({ _id: courseId });
    if (!findCourse) throw new HttpException(409, "Course doesn't exist");
    return findCourse;
  }

  public async createCourse(courseData: Course): Promise<Course> {
    const createCourseData: Course = await CourseModel.create({ ...courseData });
    return createCourseData;
  }

  public async updateCourseById(courseData: UpdateCourseDto): Promise<Course> {
    console.log('cousedata : ', courseData);
    const finded = await CourseModel.findById(courseData.id)
    console.log(' finded ', finded);
    
    const findAndUpdateCourse: Course = await CourseModel.findOneAndUpdate({ _id: courseData.id}, courseData.course);
    console.log('find one : ', findAndUpdateCourse);
    
    if (!findAndUpdateCourse) throw new HttpException(409, "Course doesn't exist");
    return findAndUpdateCourse;
  }

  // public async updateUser(userId: string, userData: User): Promise<User> {
  //   if (userData.email) {
  //     const findUser: User = await UserModel.findOne({ email: userData.email });
  //     if (findUser && findUser._id != userId) throw new HttpException(409, `This email ${userData.email} already exists`);
  //   }

  //   if (userData.password) {
  //     const hashedPassword = await hash(userData.password, 10);
  //     userData = { ...userData, password: hashedPassword };
  //   }

  //   const updateUserById: User = await UserModel.findByIdAndUpdate(userId, { userData });
  //   if (!updateUserById) throw new HttpException(409, "User doesn't exist");

  //   return updateUserById;
  // }

  // public async deleteUser(userId: string): Promise<User> {
  //   const deleteUserById: User = await UserModel.findByIdAndDelete(userId);
  //   if (!deleteUserById) throw new HttpException(409, "User doesn't exist");

  //   return deleteUserById;
  // }
}
