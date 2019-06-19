import React from "react";
import VideoCardHor from "../VideoCardHor/VideoCardHor";
import videolist from "./VideoList.scss";

function VideoList({ videos, click }) {
  if (videos === []) {
    return (
      <div className={videolist.container}>
        <div className={videolist.row} />
      </div>
    );
  } else {
    return (
      <div className={videolist.container}>
        <div className={videolist.row}>
          {videos.map(video => {
            let img;
            if (video.snippet.thumbnails == undefined) {
              img = "alt";
              return img;
            } else {
              img = video.snippet.thumbnails.medium.url;
            }
            return (
              <VideoCardHor
                key={video.id.videoId}
                img={img}
                title={video.snippet.title}
                author={video.snippet.channelTitle}
                descr={video.snippet.description}
                click={() => click(video)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default VideoList;
