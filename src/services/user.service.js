import { httpService } from './http.service';

class UserService {
  async getUserSuggestions() {
    const response = await httpService.get('/user/profile/user/suggestions');
    return response;
  }

  async logoutUser() {
    const response = await httpService.get('/signout');
    return response;
  }

  async checkCurrentUser() {
    const response = await httpService.get('/currentuser');
    return response;
  }
}

export const userService = new UserService();
