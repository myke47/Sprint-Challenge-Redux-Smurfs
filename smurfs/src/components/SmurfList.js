import React from "react";
import Smurf from "./Smurf";

const SmurfList = props => {
  return (
    <div>
      <h2 className="smurfy-bunch">Smurfy Looking Town:</h2>
      <div className="smurf-list-container">
        {props.smurfs.map((smurf, index) => (
          <Smurf key={index} smurf={smurf} deleteSmurf={props.deleteSmurf} />
        ))}
      </div>
    </div>
  );
};

export default SmurfList;
