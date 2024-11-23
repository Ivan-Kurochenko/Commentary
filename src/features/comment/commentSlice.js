import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch("https://dummyjson.com/comments?limit=0", {
      method: "GET",
    });
    return await response.json();
  },
);

const initialState = {
  commentList: [],
  totalComments: 0,
  page: 1,
  status: "idle", // idle | loading | succeeded | failed
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    likeComment(state, action) {
      const commentId = action.payload;
      const comment = state.commentList.find((c) => c.id === commentId);
      if (comment) {
        if (comment.isLiked) {
          comment.likes -= 1;
        } else {
          comment.likes += 1;
        }
        comment.isLiked = !comment.isLiked;
      }
    },
    setComments(state, action) {
      state.commentList = action.payload.comments;
      state.totalComments = action.payload.total;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.commentList = action.payload.comments.map((comment) => ({
          ...comment,
          isLiked: false,
        }));
        state.totalComments = action.payload.total;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { likeComment, setComments, setPage } = commentsSlice.actions;
export default commentsSlice.reducer;
