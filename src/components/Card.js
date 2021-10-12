import React from "react";

class Card extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.src} alt="" />
            <h2>{item.title}</h2>
          </div>
        ))}
      </>
    );
  }
}

export default Card;
