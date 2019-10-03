import SubmittyApi, { BaseResponse }  from '../client';

interface GetTokenResponse extends BaseResponse {
  data?: {
    token: string
  }
}

export default class Token {
  client: SubmittyApi;

  constructor(client: SubmittyApi) {
      this.client = client;
  }

  async get(user_id: string, password: string): Promise<GetTokenResponse> {
    const response = await this.client.post('/token', {user_id: user_id, password: password});
    const data: GetTokenResponse = response.data;
    if (data.status === 'success' && data.data) {
      this.client.api_token = data.data.token;
    }
    return data;
  }

  async invalidate(user_id: string, password: string): Promise<BaseResponse> {
    const response = await this.client.post('/token/invalidate', {user_id, password});
    return response.data;
  }
}
