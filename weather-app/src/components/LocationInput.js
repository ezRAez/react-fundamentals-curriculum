import React, { PropTypes } from 'react';

function LocationInput (props) {
  return (
    <input type="text"
           className="form-control"
           placeholder="City, ST…"
           onChange={props.onUpdateLocation}
           value={props.locationInfo} />
  );
}

LocationInput.propTypes = {
  locationInfo: PropTypes.string.isRequired,
  onUpdateLocation: PropTypes.func.isRequired
};

export default LocationInput;
