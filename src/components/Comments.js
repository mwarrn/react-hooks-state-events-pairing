import React from "react";
import EachComment from "./EachComment";

function Comments({ video }) {
    return (
        <div>
            <h2>
                {video.comments.length} Comments
            </h2>
            <EachComment video={video} />
        </div>
    );
}

export default Comments;
