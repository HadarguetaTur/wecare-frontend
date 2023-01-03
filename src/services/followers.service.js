import { httpService } from './http.service';

class FollowerService {
  async getUserFollowing() {
    const response = await httpService.get('/user/following');
    return response;
  }

  async getUserFollowers(userId) {
    const response = await httpService.get(`/user/followers/${userId}`);
    return response;
  }

  async followUser(followerId) {
    const response = await httpService.put(`/user/follow/${followerId}`);
    return response;
  }

  async unFollowUser(followeeId, followerId) {
    const response = await httpService.put(`/user/unfollow/${followeeId}/${followerId}`);
    return response;
  }

  async blockUser(followerId) {
    const response = await httpService.put(`/user/block/${followerId}`);
    return response;
  }

  async unblockUser(followerId) {
    const response = await httpService.put(`/user/unblock/${followerId}`);
    return response;
  }
}

export const followerService = new FollowerService();
