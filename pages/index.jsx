import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import Image from 'next/image';
import React from 'react';

const StyledTypography = styled(Typography)(() => ({
	lineHeight: 2.4
}));


export const overviewItems = [
	{
		key: 'item-1',
		content: 'In the 10 years, Clear Men has successfully educated & recruited 15% Vietnamese Men, 25-45 to use Clear Men by:',
	},
	{
		key: 'item-2',
		content: <><b>Functional offer:</b> Overcoming all the scalp’s challenges.</>
	},
	{
		key: 'item-3',
		content: <><b>Emotional offer:</b> Overcoming and beating no matter what challenges the world throws at him.</>,
	},
	{
		key: 'item-4',
		content:
			'We also engaged with Men by activating around their passion points, from the king of sports - Football to the emerging ESport - Gaming.'
	},
]

const overviewSlides = [
	{
		key: 'bottle',
		name: 'Clear Men Bottle',
		src: '/clear-men-bottle.png'
	},
	{
		key: 'ronaldo',
		name: 'Clear Men Ronaldo',
		src: '/clear-ronaldo.png'
	},
	{
		key: 'unbeatable',
		name: 'Clear Men Unbeatable',
		src: '/clear-unbeatable.png'
	},
]

const Home = () => {
	return (
		<Box
			component="main"
			sx={{minHeight: '100vh'}}
		>
			<Parallax pages={5}>
				<ParallaxLayer sticky={{start: 0, end: 2}}>
					<Grid
						container
						component={Container}
						alignItems="center"
						sx={{height: '100%'}}
					>
						<Grid item xs={6}>
							<Stack direction="column" spacing={3}>
								<Typography variant="h4">
									OVERVIEW
								</Typography>
								{overviewItems.map(({key, content}) => (
									<StyledTypography key={key} variant="body1">
										{content}
									</StyledTypography>
								))}
							</Stack>
						</Grid>
					</Grid>
				</ParallaxLayer>
				{overviewSlides.map(({src, alt}, index) => (
					<ParallaxLayer offset={(index)} speed={0.2}>
						<Grid
							container
							component={Container}
							alignItems="center"
							justifyContent="flex-end"
							sx={{height: '100%'}}
						>
							<Grid item xs={6} sx={{height: theme => theme.spacing(70)}}>
								<Box sx={{
									width: '100%',
									height: '100%',
									position: 'relative'
								}}>
									<Image
										src={src}
										alt={alt}
										layout="fill"
										objectFit='cover'
									/>
								</Box>
							</Grid>
						</Grid>
					</ParallaxLayer>
				))}
				<ParallaxLayer offset={3} speed={0.1}>
					<Box sx={{
						backgroundImage: 'url("objective-bg.png")',
						height: '100%',
						backgroundSize: 'cover',
					}} />
				</ParallaxLayer>
				<ParallaxLayer offset={3.5} speed={-0.2}>
					<Typography variant="h2" textAlign="center">
						OBJECTIVE
					</Typography>
				</ParallaxLayer>
			</Parallax>
		</Box>
	)
}

export default Home;
