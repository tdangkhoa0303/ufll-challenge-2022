import Grid from '@mui/material/Grid';
import React from 'react';
import {PageLayout, StyledTypography} from '../../components/PageLayout';

export default () => {
	return (
		<PageLayout title="Campaign “Clear Men's makeover”- “Lột xác cùng Clear Men”">
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Objective:
				</StyledTypography>
				<StyledTypography>
					When customers already know they should use the right shampoo, the next question is, what choice do
					they have? This time, we will make people aware of Clear Men products and its outstanding features
					(origin, ingredients, convenience...) as well as practical experiences besides advertisements in TV
					or social media.
				</StyledTypography>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Build a series with Clear team to get real experiences:
				</StyledTypography>
				<StyledTypography>
					Customers register to participate in the program and will experience hairdressing with the Clear team.
				</StyledTypography>
				<StyledTypography>
					Clear team will create a trendy and different hairstyle for customers. After that, they will be consulted
					about the scalp condition, daily living habits and the needs of the customer to advise and let the customer
					experience the appropriate Clear Men shampoo line.
				</StyledTypography>
				<StyledTypography>
					Blow-dry, style and receive real customer feedback on shampoo products and share hair care tips with Clear.
				</StyledTypography>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Support tactics:
				</StyledTypography>
				<StyledTypography>
					Upload the series to youtube with an estimated length of 15 episodes (3 episodes/ week).
				</StyledTypography>
				<StyledTypography>
					Cut into short video clips and upload to Facebook/ Instagram reels and Tiktok.
				</StyledTypography>
			</Grid>
		</PageLayout>
	)
}