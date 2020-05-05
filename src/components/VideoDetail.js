import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="container">
        <h1 className="animated infinite bounce" style={{ paddingTop: "30px" }}>
          🏀
        </h1>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>

      <h3 className="ui header">{video.snippet.title}</h3>
      <div className="ui segment">
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
