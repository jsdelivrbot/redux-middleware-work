import React from 'react';
import _ from 'lodash';
import { SparkLines, SparkLinesLine, SparkLinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return (
		<div>
			<SparkLines width={180} height={120} data={props.data}>
				<SparkLinesLine color={props.color} />
				<SparkLinesReferenceLine type="avg" />
			</SparkLines>
			<div>{average(props.data)} {props.unit}</div>
		</div>
	);
}