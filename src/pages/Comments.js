
import { useState, useEffect } from "react";
import Comment from "../componets/Comment";
import "../css/Comment.css"
export default function Comments() {
    const [comments, setComments] = useState(null);
    useEffect(() => {
        const postid = sessionStorage.getItem('postid')
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })

    }, [])
    return (
        <div className="container">
            <div className="row">
                {comments && comments.map(comment=><Comment key={comment.id} comment={comment} />)}
            </div>
        </div>
    )

}