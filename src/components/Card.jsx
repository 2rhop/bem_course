import React, { Component } from "react";
import "./Card.scss";
import { THEMES } from "../data";

class Card extends Component {
  render() {
    const {
      title,
      theme,
      content,
      imageUrl,
      ingredients,
      duration,
      serving
    } = this.props.data;
    return (
      <div className={`card ${theme || THEMES.LIGHT}`}>
        <div class="card__header">
          <span class="card__close-btn">X</span>
          <img src={imageUrl} alt={title} />
        </div>
        <div class="card__wrapper">
          <div class="card__body">
            <h2 className="card__title">{title}</h2>
            <div class="inline-wrapper">
              <div>
                <span>
                  <i class="fas fa-hourglass-start"></i> <span>{duration}</span>
                </span>
                <h4>Minutes</h4>
              </div>
              <div>
                <span>
                  <i class="fas fa-book"></i> <span>{ingredients}</span>
                </span>
                <h4>Ingredients</h4>
              </div>
              <div>
                <span>
                  <i class="fas fa-user-friends"></i> <span>{serving}</span>
                </span>
                <h4>Serving</h4>
              </div>
            </div>
            <p>{content}</p>
          </div>
          <div class="card__footer">
            <button className="card__button">View Recipe</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
