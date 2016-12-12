import React, { Component } from 'react';
import LocationInput        from '../components/LocationInput'
import        { Link }      from 'react-router'

class GetWeatherContainer extends Component {
  constructor() {
    super();

    this.state = {
      locationInfo: ""
    }
  }

  handleUpdateLocation(e) {
    this.setState({
      locationInfo: e.target.value
    })
  }

  render() {
    return (
      <div className="col-sm-12">
        <h3>WE KNOW ALL THE WEATHER</h3>
        <form>
          <div className="form-group col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
            <LocationInput onUpdateLocation={(e) =>  this.handleUpdateLocation(e)}
                           locationInfo={this.state.locationInfo}/>
          </div>
        </form>
        <div className="col-sm-offset-4 col-sm-4 col-lg-offset-5 col-lg-2">
          <Link className="btn btn-lg btn-success">GIVE ME WEATHER</Link>
        </div>
      </div>
    );
  }
}

export default GetWeatherContainer;
