import React, { Component } from 'react';
import './App.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Write City name" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

class WeatherBox extends Component {
  render() {
    const result = {
      low_temp: 10.8,
      max_temp: 15.6,
      weather: { description: 'first' },
      valid_date: '2020-03-18',
    };
    console.log(this.props.dayData);
    return (
      <div className="weather-day">
        <h3>{this.props.dayData.valid_date}</h3>
        <h3>{this.props.dayData.weather.description}</h3>
        <h3>
          {this.props.dayData.low_temp} {this.props.dayData.max_temp}
        </h3>
      </div>
    );
  }
}

class Container extends Component {
  render() {
    console.log(this.props.objectData);
    const collectData = [];
    this.props.objectData.forEach(element => {
      collectData.push(<WeatherBox dayData={element} />);
    });

    return (
      <div>
        <h2>{this.props.city}</h2>
        <div>{collectData}</div>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    const city = 'Gaza';
    const data = [
      {
        low_temp: 10.8,
        max_temp: 15.6,
        weather: { description: 'first' },
        valid_date: '2020-03-18',
      },
      {
        low_temp: 9.8,
        max_temp: 14.6,
        weather: { description: 'second' },
        valid_date: '2020-03-19',
      },
      {
        low_temp: 8.8,
        max_temp: 13.6,
        weather: { description: 'third' },
        valid_date: '2020-03-20',
      },
    ];

    return (
      <div>
        <SearchBar />
        <Container objectData={data} city={city} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
