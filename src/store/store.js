import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers/modal/modal.reducer';
import postReducer from './reducers/post/post.reducer';
import postsReducer from './reducers/post/posts.reducer';
import suggestionsReducer from './reducers/suggestions/suggestions.reducer';
import userReducer from './reducers/user/user.reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    suggestions: suggestionsReducer,
    modal: modalReducer,
    post: postReducer,
    allPosts: postsReducer
  }
});
