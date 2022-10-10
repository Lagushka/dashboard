import React from "react";
import zigzag from "./zigzag.svg";
import human from "./manish.svg";

export default function MainStatisticsCard(props) {
  return (
    <div className={`main-statistics__card main-statistics__card_${props.color}`}>
      <span className="main-statistics__name">{props.name}</span>
      <img src={zigzag} alt="Зигзаг" className="main-statistics__zigzag"/>
      <div className="main-statistics__count">
        <span className="main-statistics__number">{props.count}</span>
        <img src={human} alt="" />
      </div>
    </div>
  )
}