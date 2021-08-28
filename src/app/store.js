import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postSlice';
import usersReducer from '../features/users/usersSlice';

export default configureStore({
  reducer: {
    // 这告诉 Redux 我们希望我们的根部 state 对象内部有一个名为 posts 的字段，
    // 并且 state.posts 的所有数据都将在 dispatch action 时由 postsReducer 函数更新。
    posts: postsReducer,
    users: usersReducer,
  },
});
