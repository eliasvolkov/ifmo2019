import React from "react";
import card from "./VideoCardHor.scss";

const VideoCardHor = ({ img, title, author, descr, click }) => {
  return (
    <div className={card.container} onClick={click}>
      <div className={card.card}>
        <div className={card.img}>
          <img src={img} />
        </div>
        <div className={card.content}>
          <div className={card.title}>
            <h3 className={card.headline}>{title}</h3>
            <div className={card.info}>{author}</div>
            <div className={card.info}>45 тыс. просмотров</div>
            <div className={card.info}> Неделю назад</div>
          </div>
          <div className={card.descr}>{`${descr.slice(0, 55)}...`}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardHor;
