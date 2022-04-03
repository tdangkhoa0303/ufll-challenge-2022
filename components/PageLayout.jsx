import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

export const StyledTypography = styled(Typography)({
	lineHeight: 2,
	marginBottom: 3
});

export const FullWidthImage = styled('img')({
	width: '100%',
	margin: '24px 0'
});

export const PageLayout = ({children, title}) => {
	return (
		<Container sx={{padding: theme => theme.spacing(20, 0)}}>
			<Grid container justifyContent="center" rowGap={3}>
				<Grid item xs={8}>
					<Typography mb={4} variant="h3">
						{title}
					</Typography>
				</Grid>
				{children}
			</Grid>
		</Container>
	)
}