import React from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW5oYW5odmluYSIsImEiOiJjamtpMzUxeDcwNDV4M2twdWt0cnBubXFxIn0.OD3j_wtIYaDmAUr6b1ExUg"; // Set your mapbox token here

export default class Map extends React.Component {
  state = {
    viewport: {
      latitude: -35.28346,
      longitude: 149.12807,
      zoom: 11
    },
    windowHeight: undefined,
    windowWidth: undefined
  };

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  };

  componentWillMount() {
    this.handleResize();
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div className="map">
        <MapGL
          height={500}
          width={
            this.state.windowWidth < 600
              ? this.state.windowWidth - 20
              : this.state.windowWidth - 400
          }
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...this.state.viewport}
        />
      </div>
    );
  }
}
