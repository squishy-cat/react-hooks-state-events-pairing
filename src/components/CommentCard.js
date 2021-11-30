import React, {useState} from "react";
import Comment from "./Comment"

function CommentCard( {comments} ) {
    const [isHidden, setIsHidden] = useState(false)

    function handleClick() {
        setIsHidden(!isHidden)
    }

    function renderComment() {
        return comments.map((comment) => 
            <Comment
                key={comment.id} 
                user={comment.user} 
                content={comment.comment}
            >
            </Comment>
        ) 
    }

    return (
        <div>
            <button onClick={handleClick}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
            <div>{isHidden ? null : renderComment()}</div>
        </div>
    )
}

export default CommentCard;