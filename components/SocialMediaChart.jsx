import merge from 'lodash/merge';
import dynamic from 'next/dynamic';
import React from 'react';
import BaseOptionChart from './Chart/BaseChartOptions';

const ApexCharts = dynamic(() => import('react-apexcharts'), {ssr: false});

export const SocialMediaChart = () => {
	const chartOptions = merge(BaseOptionChart(), {
		tooltip: {
			marker: { show: false },
			y: {
				formatter: (val) => `${val}%`
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
				'In use',
				'In use the most',
				'Favorite',
			]
		}
	});

	return (
		<ApexCharts type="bar" options={chartOptions} series={[{
			name: '2021',
			data: [49, 2, 5]
		}, {
			name: '2022',
			data: [62, 7, 14]
		}]} height={364} />
	)
}