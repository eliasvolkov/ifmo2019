import React from "react";
import card from "./VideoCard.scss";

const VideoCard = ({ img, title, author, views, click }) => {
  return (
    <div className={card.container} onClick={click}>
      <div className={card.card}>
        <div className={card.img}>
          <img src={img} />
          <div className={card.duration_max}>01:04:29</div>
        </div>
        <h3 className={card.headline}>{title}</h3>
        <div className={card.author}>{author}</div>
        <div className={card.views}>просмотров {views} тыс.</div>
        <div className={card.time}> Неделю назад</div>
      </div>
    </div>
  );
};

export default VideoCard;
