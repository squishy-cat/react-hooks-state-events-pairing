import React, { useState } from "react";

function Votes( {upvotes, downvotes} ) {
    const [upvoted, setUpvoted] = useState(upvotes)
    const [downvoted, setDownvoted] = useState(downvotes)

    function addLike() {
        setUpvoted (upvoted +1)
    }
    
    function addDislike() {
        setDownvoted (downvoted +1)
    }

    return (
        <div>
            <button onClick={addLike}>{upvoted} 👍</button>
            <button onClick={addDislike}>{downvoted} 👎</button>
        </div>
    )
}

export default Votes;