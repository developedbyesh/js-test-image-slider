import React from "react";
import Card from "./components/Card";
import Navigation from "./components/Navigation";

class App extends React.Component {
  state = {
    data: [],
  };
  foodRef = React.createRef();

  getData = async () => {
    const res = await fetch("data.json");
    const data = await res.json();
    console.log(data);
    this.setState({ data: data });
  };
  componentDidMount() {
    this.getData();
  }
  // click previous arrow
  prevClick = () => {
    const slide = this.foodRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };
  // click next arrow
  nextClick = () => {
    const slide = this.foodRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };
  render() {
    const { data } = this.state;
    return (
      <div className="wrapper">
        <div className="app" ref={this.foodRef}>
          <Card data={data} />
        </div>
        <Navigation prev={this.prevClick} next={this.nextClick} />
      </div>
    );
  }
}

export default App;
