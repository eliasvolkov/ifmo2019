import React, { Component } from "react";
import videolistm from "./VideoListMain.scss";
import VideoCard from "../VideoCard/VideoCard";

export default class VideoListMain extends Component {
  render() {
    if (this.props.videos === []) {
      return null;
    } else {
      return (
        <div className={videolistm.container}>
          <h4>Популярные</h4>
          <div className={videolistm.row}>
            {this.props.videos.map(video => {
              return (
                <VideoCard
                  key={video.id.videoId}
                  img={video.snippet.thumbnails.medium.url}
                  title={video.snippet.title}
                  author={video.snippet.channelTitle}
                  views={video.statistics.viewCount}
                  click={() => this.props.click(video)}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
}
