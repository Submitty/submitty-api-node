import Course from '../course';
import { BaseResponse } from '../../client';

export default class Reports {
  course: Course;

  constructor(course: Course) {
    this.course = course;
  }

  async generateSummaries(): BaseResponse {
    const response = await this.course._post('/reports/summaries');
    return response.data;
  }
}
