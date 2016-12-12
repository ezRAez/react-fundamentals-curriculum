import React, { Component, PropTypes } from 'react';
import WeatherPrompt           from '../components/WeatherPrompt';


class GetWeatherContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      locationInfo: ""
    }
  }

  handleSubmitLocation(e) {
    e.preventDefault();
    this.setState({
      locationInfo: ""
    });

    this.context.router.push({
      pathname: '/weekly',
      query: {
        location: this.state.locationInfo
      }
    })
  }

  handleUpdateLocation(e) {
    this.setState({
      locationInfo: e.target.value
    });
  }

  render() {
    return (
      <div>
      <div className="nav-container">
        <WeatherPrompt onSubmit={(e) => this.handleSubmitLocation(e)}
                       onUpdateLocation={(e) =>  this.handleUpdateLocation(e)}
                       locationInfo={this.state.locationInfo} />
      </div>
      <div className="col-sm-12 welcome-container jumbotron">
        <WeatherPrompt onSubmit={(e) => this.handleSubmitLocation(e)}
                       onUpdateLocation={(e) =>  this.handleUpdateLocation(e)}
                       locationInfo={this.state.locationInfo} />
      </div>
      </div>
    );
  }
}


export default GetWeatherContainer;
