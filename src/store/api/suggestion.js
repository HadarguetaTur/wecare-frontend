import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../services/user.service';

const getUserSuggestions = createAsyncThunk('user/getSuggestions', async (name, { dispatch }) => {
  try {
    const response = await userService.getUserSuggestions();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export { getUserSuggestions };
