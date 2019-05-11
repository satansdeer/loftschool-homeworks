import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import isEqual from 'lodash';

const styles = {
  root: {
    width: '30%',
    padding: '20px'
  },
  title: {
    fontSize: 20,
    fontWeight: 600
  }
};

class RoverPhotos extends Component {
  // componentDidMount() {
  //   console.log('RoverPhotos mounted', this.props);
  // }

  // shouldComponentUpdate(nextProps) {
  // return !isEqual(this.props, nextProps) ? true : false;
  // return true;
  // }

  // componentDidUpdate() {
  //   console.count('RoverPhotos updated');
  //   console.log('RoverPhotos updated', this.props);
  // }

  render() {
    // console.log('RoverPhotos get props', this.props);
    const { classes, photos, name } = this.props;
    return (
      <Paper className={classes.root}>
        <Typography className={classes.title} component="h2">
          {name}
        </Typography>
        <GridList cols={3}>
          {photos.map(photo => (
            <GridListTile
              key={photo.id}
              cols={Math.round(Math.random() * 3 - 0.5)}
            >
              <img src={photo.img_src} alt={photo.camera.full_name} />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    );
  }
}

export default withStyles(styles)(RoverPhotos);
