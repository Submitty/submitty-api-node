import axios, { AxiosResponse } from 'axios';
import {OutgoingHttpHeaders} from 'http';

import Courses from './endpoints/courses';
import Course from './endpoints/course';
import Token from './endpoints/token';

export interface BaseResponse {
  status: "success" | "error" | "fail",
  message?: string;
  code?: number;
  data?: object;
}

export default class SubmittyApi {
  base_url: string;
  api_token?: string;
  token: Token;
  course?: Course;
  courses: Courses;

  constructor(base_url: String, token?: string) {
    this.base_url = base_url.replace(/\/$/, '').replace(/api$/, '') + '/api';
    this.api_token = token;
    this.token = new Token(this);
    this.courses = new Courses(this);
  }

  setCourse(semester: string, course: string) {
    this.course = new Course(this, semester, course);
  }

  getHeaders(): OutgoingHttpHeaders {
    const headers: OutgoingHttpHeaders = {
      'Content-Type': 'application/json'
    };
    if (this.api_token) {
      headers['Authorization'] = this.api_token;
    }
    return headers;
  }

  async get(endpoint: string): Promise<AxiosResponse> {
    return axios.get(
      this.base_url + endpoint,
      {
        headers: this.getHeaders()
      }
    );
  }

  async post(endpoint: string, data: object): Promise<AxiosResponse> {
    return axios.post(
      this.base_url + endpoint,
      data,
      {
        headers: this.getHeaders()
      }
    );
  }
}
