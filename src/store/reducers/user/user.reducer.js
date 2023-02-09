import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  profile: JSON.parse(localStorage.getItem('profile')) || null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { token, profile } = action.payload;
      state.token = token;
      state.profile = profile;
      localStorage.setItem('profile', JSON.stringify(profile));
    },
    clearUser: (state) => {
      state.token = '';
      state.profile = null;
      localStorage.removeItem('profile');
    },
    updateUserProfile: (state, action) => {
      state.profile = action.payload;
    }
  }
});

export const { addUser, clearUser, updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
