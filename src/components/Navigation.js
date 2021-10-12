import React from "react";

class Navigation extends React.Component {
  render() {
    const { prev, next } = this.props;
    return (
      <div className="row">
        <div className="prev" onClick={prev}>
          <img src="images/prev.png" width="70px" alt="" />
        </div>
        <div className="next" onClick={next}>
          <img src="images/next.png" width="70px" alt="" />
        </div>
      </div>
    );
  }
}

export default Navigation;
