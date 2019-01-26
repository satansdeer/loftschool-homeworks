import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrent,
  getRoverPhotos,
  fetchPhotos,
  getMax,
  getMin
} from "../../modules/RoverPhotos";
import RoverPhotos from "../RoverPhotos";
import SelectSol from "../SelectSol";

class RoversViewer extends Component {

  static get propTypes() {
    return {
      photos: propTypes.array.isRequired,
      solNum: propTypes.number,
      max: propTypes.number,
      min: propTypes.number
    };
  }

  static get defaultProps() {
    return {
      solNum: 1,
      max: 100,
      min: 1
    };
  }

  componentDidMount() {
    const { fetchPhotos } = this.props;
    fetchPhotos();
  }

  render() {
    const { photos, solNum, max, min } = this.props;
    return (
      <div>
        <div>
          <SelectSol minSol={min} maxSol={max} selectedSol={solNum}/>
        </div>
        <div>
          {photos && photos.map(item => {
            return <RoverPhotos key={item.name} name={item.name} photos={item.photos}/>
          })}
        </div>
      </div>
    );
  }
}


const mapStateFromProps = state => {
  return {
    photos: getRoverPhotos(state),
    solNum: getCurrent(state),
    max: getMax(state),
    min: getMin(state)
  };
};

const mapDispatchFromProps = { fetchPhotos };

export default connect(mapStateFromProps, mapDispatchFromProps)(RoversViewer);