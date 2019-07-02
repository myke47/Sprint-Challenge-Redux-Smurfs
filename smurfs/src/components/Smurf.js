import React from 'react';

const Smurf = props => {
  return (
    <div className="smurfy-card">
      <h3 className="smurf-name">{props.smurf.name}</h3>
      <h5 className="smurf-age">{props.smurf.age}</h5>
      <h5 className="smurf-height">{props.smurf.height}</h5>
      <button 
      onClick={() => props.deleteSmurf(props.smurf.id)}
      className="delete-smurf">
      Vote Smurf Out</button>
    </div>
  )
}

export default Smurf;