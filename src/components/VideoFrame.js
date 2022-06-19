import React, { useState } from "react";
import Comments from "./Comments";

function VideoFrame({ video }) {
    const [data, setData] = useState(video);
    const [isClick, setIsClick] = useState(true);

    function handleDisplay() {
        setIsClick(!isClick);
    }

    function upvote() {
        const meta = {...data};
        meta.upvotes++;
        setData(meta);
    }

    function downvote() {
        const meta = {...data};
        meta.downvotes--;
        setData(meta);
    }

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={data.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={data.title}
            />
            <h1>{data.title}</h1>
            <div>
                {data.views} Views | Uploaded {data.createdAt}
            </div>
            <button onClick={upvote}>{data.upvotes} 👍</button>
            <button onClick={downvote}>{data.downvotes} 👎</button>
            <div>
                <button onClick={handleDisplay}>{isClick ? "Hide Comments" : "Show Comments"}</button>
            </div>
            <hr />
            <div>
                {isClick ? <Comments video={data} /> : null }
            </div>
        </div>

    );
}

export default VideoFrame;
