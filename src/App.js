import React from "react";
import Search from "./Components/Search";
import "./App.css";
import SearchCity from "./Components/SearchCity";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: [],
      cityName: [],
    };
    this.setter = this.setData.bind(this);
    this.setterCity = this.setCityName.bind(this);
  }

  setCityName = (value) => {
    this.setState({ cityName: value });
    console.log(value);
  };

  setData = (value) => {
    this.setState({ zip: value });
    console.log(value);
  };

  render() {
    let displayZipArr;
    let displayCityArr;

    if (this.state.zip.length > 0) {
      displayZipArr = this.state.zip.map((city) => {
        return <div>{city.City}</div>;
      });
    } else {
      displayZipArr = <div>No Results</div>;
    }

    if (this.state.cityName.length > 0) {
      displayCityArr = this.state.cityName.map((city) => {
        return <div>{city}</div>;
      });
    } else {
      displayCityArr = <div>No Results</div>;
    }

    return (
      <div className="App">
        <Search setter={this.setter}></Search>
        {displayZipArr}
        <SearchCity setter={this.setterCity}></SearchCity>
        {displayCityArr}
      </div>
    );
  }
}

export default App;
