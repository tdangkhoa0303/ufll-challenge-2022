import {List, ListItem} from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import {FullWidthImage, PageLayout, StyledTypography} from '../../components/PageLayout';

export default () => {
	return (
		<PageLayout title="Use refill packaging with different compliment/ motivation quotes">
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Using refill packaging:
				</StyledTypography>
				<StyledTypography>
					The target Gen Z has <b>low average income</b>, tends to be <b>price sensitive</b> and care about <b>purchasing sustainable
					products.</b> To solve all those problems, the production of refill packaging is a completely optimal choice.
				</StyledTypography>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Quotes adding:
				</StyledTypography>
				<StyledTypography>
					Target audience is generation Z who have just started working and will face a lot of problems in society (work pressure, sexism,...).
					Quotes are printed as gifts, messages that the giver wants to convey to encourage other.
				</StyledTypography>
				<StyledTypography>
					→ This creates a buying trend and also help encourage Female buying Clear Men to give gifts both to
					take care of other side’s health and to send meaningful messages.
				</StyledTypography>
				<StyledTypography>
					<b><i>Attached quotes on the refill packaging like:</i></b>
				</StyledTypography>
				<List>
					<StyledTypography component={ListItem}>
						“If you were a scented shampoo, they'd have to call it Perfectly Imperfect”
					</StyledTypography>
					<StyledTypography component={ListItem}>
						“When you say, "I meant to do that," I totally believe you.”
					</StyledTypography>
					<StyledTypography component={ListItem}>
						“Everyone gets knocked down sometimes; only people like you get back up again and keep going.”
					</StyledTypography>
					<StyledTypography component={ListItem}>
						“Your laugh is infectious. It made me instantly smile.”
					</StyledTypography>
					<StyledTypography component={ListItem}>
						“Because of your smile, you make life more beautiful.”
					</StyledTypography>
				</List>
				<FullWidthImage
					src="/clear-quote-refill.png"
					alt="Clear Men Refill Pack With Quote"
				/>
			</Grid>
			<Grid item xs={8}>
				<StyledTypography variant="h4" mb={2}>
					Support for product launch:
				</StyledTypography>
				<StyledTypography fontWeight={700}>
					a) Media:
				</StyledTypography>
				<List>
					<StyledTypography component={ListItem}>
						Post: from Page, KOLs
					</StyledTypography>
					<FullWidthImage
						src="/giangoi.png"
						alt="Giang Oi's Post - Nhan Gui Yeu Thuong"
					/>
					<StyledTypography component={ListItem}>
						Short reviews: from Tiktoker
					</StyledTypography>
					<FullWidthImage
						src="/bong-tim.png"
						alt="Bong Tim Tiktok"
					/>
				</List>
				<StyledTypography fontWeight={700}>
					b) Display:
				</StyledTypography>
				<StyledTypography>
					Sale on e-commerce stores: Shopee, Lazada, Tiki, Sendo,...
				</StyledTypography>
				<StyledTypography>
					POSM in supermarket: Vinmart, Co.op Mart, Go,...
				</StyledTypography>
			</Grid>
		</PageLayout>
	)
}