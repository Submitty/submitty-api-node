import SubmittyApi, { BaseResponse } from "../client";
import { AxiosResponse } from "axios";
import Reports from "./course/reports";

export default class Course {
  client: SubmittyApi;
  semester: string;
  course: string;

  reports: Reports;

  constructor(client: SubmittyApi, semester: string, course: string) {
    this.client = client;
    this.semester = semester;
    this.course = course;

    this.reports = new Reports(this);
  }

  _get(endpoint: string): Promise<AxiosResponse> {
    return this.client.get(`/${this.semester}/${this.course}${endpoint}`);
  }

  _post(endpoint: string, data: object = {}): Promise<AxiosResponse> {
    return this.client.post(`/${this.semester}/${this.course}${endpoint}`, data);
  }

  async users(): Promise<BaseResponse> {
    const response = await this._get('/users');
    return response.data;
  }

  async graders(): Promise<BaseResponse> {
    const response = await this._get('/graders');
    return response.data;
  }

}
