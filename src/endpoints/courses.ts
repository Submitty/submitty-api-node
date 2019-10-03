import SubmittyApi, { BaseResponse } from "../client";

export default class Courses {
  client: SubmittyApi;

  constructor(client: SubmittyApi) {
    this.client = client;
  }

  async get(): Promise<BaseResponse> {
    const response = await this.client.get('/courses');
    return response.data;
  }

  async create(
    semester: string,
    course: string,
    head_instructor: string,
    base_semester: string,
    base_course: string
  ): Promise<BaseResponse> {
    const response = await this.client.post('/courses', {
      course_semester: semester,
      course_title: course,
      head_instructor: head_instructor,
      base_semester: base_semester,
      base_course: base_course
    });
    return response.data;
  }
}
