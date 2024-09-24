import {useEffect, useState} from "react";
import {Comment} from './types.ts'
import {fetchComments} from "./rest";


function App() {
    const [comments, setComments] = useState(Array<Comment>)

    useEffect(() => {
        fetchComments().then(comments => setComments(comments))
    }, []);

    return (
        <>
            <table>
                <tbody>
                {comments.map((comment) =>
                    <tr key={comment.id}>{comment.id} |{comment.body} | {comment.user.fullName}</tr>)}
                </tbody>
            </table>
        </>
    )
}

export default App
