import React from "react";

function EachComment({ video }) {

    function displayComments() {
        const comments = video.comments;
        
        return comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h3>{comment.user}</h3>
                    <div>{comment.comment}</div>
                </div>

            );
        });
    }

    return (
        <div>
            {displayComments()}
        </div>
    );
}

export default EachComment;
