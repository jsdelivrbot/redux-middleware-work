import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

	renderWeather(cityData) {
		return (
			<tr>
				<td>{ cityData.city.name}</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<td>City</td>
						<td>Temparature</td>
						<td>Pressure</td>
						<td>Humidity</td>
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