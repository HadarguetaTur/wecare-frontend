import { floor, random } from 'lodash';
import { avatarColors } from '../utils/static.data';
import { createSearchParams } from 'react-router-dom';
import { addUser, clearUser } from '../store/reducers/user/user.reducer';

export class Utils {
  static avatarColor() {
    return avatarColors[floor(random(0.9) * avatarColors.length)];
  }

  static generateAvatar(text, backgroundColor, foregroundColor = 'white') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 200;
    canvas.height = 200;

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = 'normal 80px sans-serif';
    context.fillStyle = foregroundColor;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL('image/png');
  }

  static dispatchUser(result, pageReload, dispatch, setUser) {
    console.log(result);
    pageReload(true);
    dispatch(addUser({ token: result.data.token, profile: result.data.user }));
    setUser(result.data.user);
  }

  static clearStore({ dispatch, deleteStorageUsername, deleteSessionPageReload, setLoggedIn }) {
    dispatch(clearUser());
    // dispatch clear notification action
    deleteStorageUsername();
    deleteSessionPageReload();
    setLoggedIn(false);
  }

  static appEnvironment() {
    const env = process.env.REACT_APP_ENVIRONMENT;
    if (env === 'development') {
      return 'DEV';
    } else if (env === 'staging') {
      return 'STG';
    }
  }

  static mapSettingsDropdownItems(setSettings) {
    const items = [];
    const item = {
      topText: 'My Profile',
      subText: 'View personal profile.'
    };
    items.push(item);
    setSettings(items);
    return items;
  }

  static navigateToProfile(data, navigate) {
    const url = `/app/social/profile/${data?.username}?${createSearchParams({ id: data?._id, uId: data?.uId })}`;
    navigate(url);
  }
}
