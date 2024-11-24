import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Footer from "./components/Footer/index.jsx";
import CommentList from "./components/CommentList/index.jsx";
import Header from "./components/Header/index.jsx";
import ErrorPage from "./components/ErrorPage/index.jsx";
import {fetchComments} from "./reducers/comment.js";

function App() {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.commentList);

    useEffect(() => {
        if (!comments) {
            dispatch(fetchComments());
        }
    }, []);

    return (
        <>
            <Header/>
            {comments ? (
                <>
                    <CommentList/>
                    <Footer/>
                </>
            ) : (
                <ErrorPage/>
            )}
        </>
    );
}

export default App;
