import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./features/comment/commentSlice";
import Footer from "./components/Footer/index.jsx";
import CommentList from "./components/CommentList/index.jsx";
import Header from "./components/Header/index.jsx";
import ErrorPage from "./components/ErrorPage/index.jsx";

function App() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.commentList);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <>
      <Header />
      {comments? (
        <>
          <CommentList />
          <Footer />
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default App;
