import React from "react";

const VideoDetail = (props) => {
  // Below, the "if" condition is just temporary, to overlook the null value of props.video
  if (!props.video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="YouTube video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
