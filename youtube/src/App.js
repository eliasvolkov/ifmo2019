import React, { Component } from "react";
import Header from "./components/Header/Header";
import youtube from "./servises/youtube";
import VideoCard from "./components/VideoCard/VideoCard";
import VideoListMain from "./components/VideoListMain/VideoListMain";
import VideoCardHor from "./components/VideoCardHor/VideoCardHor";
import VideoList from "./components/VideoList/VideoList";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import modules from "./App.scss";

export default class App extends Component {
  state = {
    popularVideos: [],
    foundVideos: [],
    videoId: "",
    videoDetail: null
  };

  getPopular = () => {
    const data = new youtube();
    data
      .popularVideos()
      .then(videos => {
        this.setState({ popularVideos: videos });
        console.log(this.state.popularVideos);
      })
      .catch(err => err);
  };

  findVideos = title => {
    const data = new youtube();
    data
      .findVideos(title)
      .then(videos => {
        this.setState({ foundVideos: videos, videoId: "" });
        console.log(this.state.foundVideos);
      })
      .catch(err => err);
  };

  onSubmitInput = title => {
    this.findVideos(title);
    this.setState(({ popularVideos }) => {
      const newArray = [...popularVideos];
      newArray.length = 0;
      return {
        popularVideos: newArray
      };
    });
  };

  onClickedVideo = video => {
    this.setState(({ videoId, videoDetail }) => {
      // video id for VideoListMain
      let id = videoId;
      id = "";
      if (video.id.videoId !== undefined) {
        id = video.id.videoId;
      } else {
        id = video.id;
      }

      window.scrollTo(0, 0);

      let detail = { ...videoDetail };
      detail = video;
      return {
        videoId: id,
        videoDetail: detail
      };
    });
  };

  componentDidMount() {
    this.getPopular();
    console.log("comp");
  }

  render() {
    if (this.state.popularVideos === [] && this.state.foundVideos === []) {
      return (
        <div>
          <Header />
          <main className={modules.main} />
        </div>
      );
    } else if (this.state.popularVideos !== []) {
      return (
        <div>
          <Header find={this.onSubmitInput} />
          <main className={modules.main}>
            <VideoDetail
              id={this.state.videoId}
              video={this.state.videoDetail}
            />
            <VideoListMain
              videos={this.state.popularVideos}
              click={this.onClickedVideo}
            />
            <VideoList
              videos={this.state.foundVideos}
              click={this.onClickedVideo}
            />
          </main>
        </div>
      );
    }
  }
}
