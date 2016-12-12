import React from 'react';

function LocationInput (props) {
  return (
    <input type="text"
           className="form-control"
           placeholder="City, ST…"
           onChange={props.onUpdateLocation}
           value={props.locationInfo} />
  );
}

export default LocationInput;
