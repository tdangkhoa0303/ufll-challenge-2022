import merge from 'lodash/merge';
import dynamic from 'next/dynamic';
import React from 'react';
import BaseOptionChart from './Chart/BaseChartOptions';

const ApexCharts = dynamic(() => import('react-apexcharts'), {ssr: false});

const CHART_DATA = [{data: [28, 15, 15, 14, 9, 7, 4, 4, 3, 35]}];

export const HairProblemChart = () => {
	const chartOptions = merge(BaseOptionChart(), {
		tooltip: {
			marker: { show: false },
			y: {
				title: {
					formatter: (seriesName) => `#${seriesName}`
				},
				formatter: (val) => `${val}%`
			}
		},
		plotOptions: {
			bar: { horizontal: true, barHeight: '28%', borderRadius: 2 }
		},
		xaxis: {
			title: {
				text: 'percentage (%)'
			},
			categories: [
				'Dandruff',
				'Itchy',
				'Dry',
				'Hair loss',
				'Oily',
				'Frizzy',
				'Broken hair',
				'Tangled',
				'Split end',
				'No problems'
			]
		}
	});

	return (
		<ApexCharts type="bar" series={CHART_DATA} options={chartOptions} height={364} />
	)
}