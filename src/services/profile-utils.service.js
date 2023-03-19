import { createSearchParams } from 'react-router-dom';

export class ProfileUtils {
  static navigateToProfile(data, navigate) {
    console.log(data);
    const url = `/app/social/profile/${data?.username}?${createSearchParams({
      id: data?.userId || data?._id,
      uId: data?.uId
    })}`;
    navigate(url);
  }
}
