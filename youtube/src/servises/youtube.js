export default class YouTube {
  constructor() {
    this.api_key = "AIzaSyAqO8_RkQkvaQ_s3th0qlRYB-0oRmsSIAo";
    this.api_key1 = "AIzaSyCoeI5EbIirbYMCf-xl6XoZp1sQ7I5GFJQ";
  }

  async findVideos(title) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${title}&key=${
        this.api_key1
      }&maxResults=35&part=snippet`
    );
    const videos = await response.json();
    return videos.items;
  }

  async popularVideos() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=35&regionCode=US&key=${
        this.api_key1
      }`
    );
    const videos = await response.json();
    return videos.items;
  }
}
