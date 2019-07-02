import React from 'react';
import Smurf from './Smurf'

const SmurfList = props => {

   return (
    <div>
      <h2 className="smurfy-bunch">Smurfy Looking Town:</h2>
      <div className="smurf-list-container">
  <Smurf smurf={smurf} key={index} deleteSmurf={props.deleteSmurf} />
      </div>
    </div>
   )
}

export default SmurfList;