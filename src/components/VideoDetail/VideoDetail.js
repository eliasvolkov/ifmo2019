import React from "react";
import video from "./VideoDetail.scss";

function VideoDetail({ id, video }) {
  if (id == "" || video == null) {
    return null;
  } else {
    return (
      <div className={video.container}>
        <div className={video.video}>
          <iframe
            height="480"
            src={`https://www.youtube.com/embed/${id}`}
            frameborder="0"
            allow="autoplay"
            allowfullscreen="allowfullscreen"
          />
        </div>
        <div className={video.text}>
          <h4 className={video.headline}>{video.snippet.title}</h4>
          <p className={video.info}>48 986 просмотров</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
