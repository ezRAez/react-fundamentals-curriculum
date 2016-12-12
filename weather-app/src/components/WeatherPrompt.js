import React from 'react';

import LocationInput from './LocationInput';


function WeatherPrompt(props) {
  return (
    <div className="prompt-container">
      <h3>WE KNOW ALL THE WEATHER</h3>
      <form onSubmit={ props.onSubmit }>
        <LocationInput onUpdateLocation={props.onUpdateLocation}
                         locationInfo={props.locationInfo}/>
        <button className="btn btn-block btn-success" type="submit">GIVE ME WEATHER</button>
      </form>
    </div>
  );
}

export default WeatherPrompt;
