import Grid from '@mui/material/Grid';
import React from 'react';
import {FullWidthImage, PageLayout, StyledTypography} from '../../components/PageLayout';

export default () => {
	return (
		<PageLayout title="Educate “Men use Shampoo for Men”">
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Objective:
				</StyledTypography>
				<StyledTypography>
					Explain that men and women should not use the same shampoo because of different scalp types.
					In addition, the current shampoo lines are also available for men and easy to find.
				</StyledTypography>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Trigger:
				</StyledTypography>
				<StyledTypography>
					Presenting experiment between a man using men's shampoo and a man using women's shampoo through media channels.
				</StyledTypography>
				<StyledTypography>
					Free sample Clear Men 10ml for customers to use and experience.
				</StyledTypography>
				<FullWidthImage
					src="/clearmen-sample.png"
					alt="Clear Men Sample"
				/>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Support tactics:
				</StyledTypography>
				<StyledTypography>
					Professional articles on the use of female shampoos are not suitable for men's scalp, may causing itchy dandruff.
				</StyledTypography>
				<StyledTypography>
					Reviews from reputable doctor channels like Dr Hiếu Aesthetic, Anh Bác Sĩ,...
				</StyledTypography>
				<FullWidthImage
					src="/anh-bac-si.png"
					alt="Anh Bac Si Channel"
				/>
				<StyledTypography>
					Fact Post from Unilever Page.
				</StyledTypography>
				<StyledTypography>
					Free sample when buying Unilever products at supermarkets and sales agents for customers. Besides, customers have to fill in a survey form about “Awareness of Men’s Shampoo about age.
				</StyledTypography>
			</Grid>
		</PageLayout>
	)
}