import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// An arbitrary number.
const COMMENTS_PER_PAGE = 20;

export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async (_, {getState}) => {
        const state = getState();
        const page = state.comments.page;
        const response = await fetch(
            `https://dummyjson.com/comments?limit=${COMMENTS_PER_PAGE}&skip=${(page - 1) * COMMENTS_PER_PAGE}`,
            {
                method: "GET",
            },
        );

        return await response.json();
    },
);

const initialState = {
    commentList: [],
    totalComments: 0,
    page: 1,
    totalPages: 0,
    status: "idle", // idle | loading | succeeded | failed
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        deleteComment(state, action) {
            const commentId = action.payload;
            console.log("delete comment ", commentId);
        },
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
                state.totalPages = Math.ceil(state.totalComments / COMMENTS_PER_PAGE);
            })
            .addCase(fetchComments.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const {
    likeComment,
    setPage,
    deleteComment
} = commentsSlice.actions;
export default commentsSlice.reducer;
