import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/Card.component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monsters={monster} />;
    })}
  </div>
);

export default CardList;
