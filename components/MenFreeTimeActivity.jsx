import merge from 'lodash/merge';
import dynamic from 'next/dynamic';
import React from 'react';
import BaseOptionChart from './Chart/BaseChartOptions';

const ApexCharts = dynamic(() => import('react-apexcharts'), {ssr: false});

const CHART_DATA = [{data: [66, 54, 54,  51, 50, 34, 33, 32, 31, 30, 25, 22, 29]}];

export const MenFreeTimeActivity = () => {
	const chartOptions = merge(BaseOptionChart(), {
		tooltip: {
			marker: { show: false },
			y: {
				value: {
					formatter: value => `${value}%`
				},
				title: {
					formatter: (seriesName) => `#${seriesName}`
				},
				formatter: (val) => `${val}%`,
			}
		},
		plotOptions: {
			bar: { barHeight: '28%', borderRadius: 2 }
		},
		yaxis: {
			title: {
				text: 'percentage (%)'
			}
		},
		xaxis: {
			categories: [
				'Play games',
				'Listening to music',
				'Social media',
				'Watching video / TV',
				'Internet surfing',
				'Chatting with friends',
				'Reading books',
				'Sleeping',
				'Talking friends on the phone',
				'Studying',
				'Working',
				'Cooking',
				'Fitness/Yoga'
			]
		}
	});

	return (
		<ApexCharts type="bar" series={CHART_DATA} options={chartOptions} height={364} />
	)
}