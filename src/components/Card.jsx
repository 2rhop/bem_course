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
        <div id="header">
          <span id="close-btn">X</span>
          <img src={imageUrl} alt={title} />
        </div>
        <div id="wrapper">
          <div id="body">
            <h2>{title}</h2>
            <div id="info-box">
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
          <div id="footer">
            <button>View Recipe</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
