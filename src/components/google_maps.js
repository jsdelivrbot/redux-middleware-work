import React, { Component } from 'react';

class GoogleMaps extends Component {

	componentDidMount() {
		console.log(this.refs.map);
		new google.maps.Map(this.refs.map, {
			zoom:12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		//this can be this.refs.map
		return <div ref="map"/>;
	}
}

export default GoogleMaps;