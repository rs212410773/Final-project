// import React ,{useEffect} from 'react';
import video from '../../video/video.mp4';
// import { Player } from 'video-react';
// import '../../styles/video.css';
import React from "react";
import PropTypes from "prop-types";
import Portal from "@material-ui/core/Portal";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  videoContainerRoot: {
    height: "300px",
    width: "100%",
    backgroundColor: "#333",
    position: "relative",
    overflow: "hidden"
  },
  mainVideo: {},
  additionalVideos: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "32%",
    height: "100%",
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.5)",
    transform: `translate3d(100%, 0, 0)`,
    transition: "transform .3s ease-in-out"
  },
  additionalVideosVisible: {
    transform: "translate3d(0, 0, 0)"
  }
});

class VideoPortal extends React.Component {
  state = {
    activeVideoIndex: 0,
    hovered: false
  };

  componentDidMount() {
    this.activeVideoContainer = React.createRef();
  }

  handleVideoClick = index => () => {
    this.setState({ activeVideoIndex: index });
  };

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseOut = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { classes } = this.props;
    const { activeVideoIndex, hovered } = this.state;
    return (
      // <div>
      //   <Button onClick={this.handleClick}>{show ? 'Unmount children' : 'Mount children'}</Button>
      //   <div className={classes.alert}>
      //     <Typography>It looks like I will render here.</Typography>
      //     {show ? (
      //       <Portal container={this.container}>
      //         <Typography>But I actually render here!</Typography>
      //       </Portal>
      //     ) : null}
      //   </div>
      //   <div
      //     className={classes.alert}
      //     ref={ref => {
      //       this.container = ref;
      //     }}
      //   />
      // </div>
      <div
        className={classes.videoContainerRoot}
        onMouseOver={this.handleMouseEnter}
        onMouseOut={this.handleMouseOut}
      >
        <div
          className={classes.mainVideo}
          ref={ref => {
            this.container = ref;
          }}
        />
        <div
          className={classNames(classes.additionalVideos, {
            [classes.additionalVideosVisible]: hovered
          })}
        >
          <Portal
            container={this.container}
            disablePortal={activeVideoIndex !== 0}
          >
            <video
              onClick={this.handleVideoClick(0)}
              style={{ width: "100%" }}
              src={video}
              controls
            />
          </Portal>
          <Portal
            container={this.container}
            disablePortal={activeVideoIndex !== 1}
          >
            <video
              onClick={this.handleVideoClick(1)}
              style={{ width: "100%" }}
              src={video}
              controls
            />
          </Portal>
        </div>
      </div>
    );
  }
}

VideoPortal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoPortal);
