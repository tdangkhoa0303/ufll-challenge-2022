import Grid from '@mui/material/Grid';
import React from 'react';
import {PageLayout, StyledTypography} from '../../components/PageLayout';

export default () => {
	return (
		<PageLayout title="Recalling empty refill bags">
			<Grid item xs={8}>
				<StyledTypography>
					Program to exchange 10 empty refill bags for 1 new refill bag at sales agents, supermarkets,... towards sustainable products and customer loyalty.
				</StyledTypography>
			</Grid>
		</PageLayout>
	)
}