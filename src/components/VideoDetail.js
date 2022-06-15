import React from "react";

const VideoDetail = (props) => {
    // Below, the "if" condition is just temporary, to overlook the null value of props.video
    if(!props.video){
        return <div>Loading...</div>
    }
    return <div>{props.video.snippet.title}</div>
};

export default VideoDetail;
