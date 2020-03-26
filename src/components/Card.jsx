import React, { Component } from "react";
import "./Card.scss";

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
      <div className={`card ${theme || ""}`}>
        <div className="header">
          <span className="close-btn"></span>
          <img src={imageUrl} alt={title} />
        </div>
        <div className="body">
          <h3>{title}</h3>
          <div className="info-box">
            <div>
              <span>
                <i class="fas fa-hourglass-start"></i> {duration}
              </span>
              <h4>Minutes</h4>
            </div>
            <div>
              <span>
                <i class="fas fa-book"></i> {ingredients}
              </span>
              <h4>Ingredients</h4>
            </div>
            <div>
              <span>
                <i class="fas fa-user-friends"></i> {serving}
              </span>
              <h4>Serving</h4>
            </div>
          </div>
          <p>{content}</p>
        </div>
        <div className="footer">
          <button>View Recipe</button>
        </div>
      </div>
    );
  }
}

export default Card;
