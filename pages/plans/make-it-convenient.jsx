import Grid from '@mui/material/Grid';
import React from 'react';
import {FullWidthImage, PageLayout, StyledTypography} from '../../components/PageLayout';

export default () => {
	return (
		<PageLayout title="Make it easy and convenient to shop online">
			<Grid item xs={8}>
				<StyledTypography mb={2}>
					Widely sold on all e-commerce platforms with easy shipping, inspection, and return policies.
				</StyledTypography>
				<StyledTypography mb={2}>
					Collaborate with some E-Wallet to offer attractive promotions
				</StyledTypography>
				<FullWidthImage
					src="/shopee-pay.jpg"
					alt="Shopee Pay"
				/>
			</Grid>
		</PageLayout>
	)
}