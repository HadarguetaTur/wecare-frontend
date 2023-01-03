import { httpService } from './http.service';

class AuthService {
  async signUp(body) {
    const response = await httpService.post('/signup', body);
    return response;
  }

  async signIn(body) {
    const response = await httpService.post('/signin', body);
    return response;
  }

  async forgotPassword(email) {
    const response = await httpService.post('/forgot-password', { email });
    return response;
  }

  async resetPassword(token, body) {
    const response = await httpService.post(`/reset-password/${token}`, body);
    return response;
  }
}

export const authService = new AuthService();
