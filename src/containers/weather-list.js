import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMaps from '../components/google_maps';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temp = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lat, lon } = cityData.city.coord;
		return (
			<tr key={ name }>
				<td><GoogleMaps lat={lat}  lon={lon} /></td>
				<td><Chart data={ temp } color="orange" unit="K" /></td>
				<td><Chart data={ pressures } color="red" unit="hPa" /></td>
				<td><Chart data={ humidities } color="blue" unit="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<td>City</td>
						<td>Temparature (K)</td>
						<td>Pressure (hPa)</td>
						<td>Humidity (%)</td>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);