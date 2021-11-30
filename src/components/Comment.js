import React, { useState } from "react";

function Comment({user, content}) {
    const [upvoted, setUpvoted] = useState(0)
    const [downvoted, setDownvoted] = useState(0)
    const [deleted, setDeleted] = useState(false)

    function addLike() {
        setUpvoted (upvoted +1)
    }
    
    function addDislike() {
        setDownvoted (downvoted +1)
    }

    function deleteComment() {
        setDeleted (true)
    }

    return (
        <div>
            {deleted ? null : <h3>{user}</h3>}
            {deleted ? null : <p>{content}</p>}
            {deleted ? null : <button onClick={addLike}>{upvoted} 👍</button>}
            {deleted ? null : <button onClick={addDislike}>{downvoted} 👎</button>}
            {deleted ? null : <button onClick={deleteComment}>Delete</button>}
        </div>
    )
}

export default Comment;