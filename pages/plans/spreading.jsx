import Grid from '@mui/material/Grid';
import React from 'react';
import {FullWidthImage, PageLayout, StyledTypography} from '../../components/PageLayout';

export default () => {
	return (
		<PageLayout title="Use refill packaging with different compliment/ motivation quotes">
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Objective:
				</StyledTypography>
				<StyledTypography>
					After the target customers have been updated with knowledge about hair care and Clear Men products line,
					then, we promote the spread of the Clear Men 3 in 1 product line to become <b>the top of the customer's mind.</b>
					We will <b>emphasize the speed and convenience</b> when using Clear Man 3 in 1 product line.
				</StyledTypography>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Viral TVC on TV, Social Media
				</StyledTypography>
				<StyledTypography>
					We will deliver the slogan “7 PHÚT BAY GÀU” to remind the audience with this Clear Men 3 in 1 product
					line and send message “Keeping up with the hectic life or embracing yourself ? Why not both with Clear
					Men ?”
				</StyledTypography>
				<FullWidthImage
					src="/slogan.png"
					alt="Slogan"
				/>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					KOLs/ Micro Influencers: Review on Youtube Channel, FB/ Instagram Story, Travel Vlogs,...
				</StyledTypography>
				<FullWidthImage
					src="/dino.png"
					alt="Dinology Channel"
				/>
				<FullWidthImage
					src="/anh-ban-than.png"
					alt="Anh Ban Than Channel"
				/>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Sponsor and promote through the Gameshow “Sao Nhập Ngũ” to accelerate the compactness of the Clear Men 3 in 1 shampoo line:
				</StyledTypography>
				<FullWidthImage
					src="/sao-nhap-ngu.png"
					alt="Sao Nhap Ngu TVShow"
				/>
				<StyledTypography mb={2}>
					The concept meets all criteria: active, strong, busy and high performance male.
				</StyledTypography>
				<StyledTypography mb={2}>
					The show is in the top trending and most of the audience is Gen Z.
				</StyledTypography>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Support tactics:
				</StyledTypography>
				<FullWidthImage
					src="/hashtag-7phut.png"
					alt="Clear Men Hashtag on facebook post"
				/>
				<StyledTypography>
					Posting from Page and KOLs hashtag <b>#7PHUTBAYGAU</b>.
				</StyledTypography>
				<StyledTypography>
					Use cut-TVC for Youtube/ Facebook Ads.
				</StyledTypography>
				<StyledTypography>
					Google Ads for hair care forum, review website.
				</StyledTypography>
				<StyledTypography>
					Social Seeding from Unilever Page, Haircare group to shows real-life reviews.
				</StyledTypography>
				<StyledTypography>
					Cut good reviews, feedbacks and upload from Unilever Page.
				</StyledTypography>
			</Grid>
		</PageLayout>
	)
}