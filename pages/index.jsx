import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import Image from 'next/image';
import React, {Fragment} from 'react';
import {Anchor} from '../components';
import {GradientCard} from '../components/GradientCard';
import {ParallaxController} from '../components/ParallaxController';
import {RefProvider} from '../components/Ref.context';
import {useSidebarState} from '../components/Sidebar.context';
import {SIDEBAR_ITEMS} from '../constants';
import {
	bigIdeaSteps,
	chartContent,
	genzContent,
	genzStatistic,
	insightContent,
	overviewContent,
	overviewSlides,
	reasonToChoose
} from '../data';

const StyledTypography = styled(Typography)(() => ({
	lineHeight: 2.4
}));

const FullHeightBox = styled(Box)(() => ({
	height: '100%'
}));

const StyledGradientCard = styled(GradientCard)({
	justifyContent: 'center',

	'& .title': {
		opacity: 1,
		transition: 'all 0.2s ease-in-out',
	},
	'& .content': {
		opacity: 0,
		display: 'none',
		transition: 'all 0.2s ease-in-out',
	},

	'&:hover': {
		'& .title': {
			opacity: 0,
			display: 'none',
		},
		'& .content': {
			opacity: 1,
			display: 'block',
		}
	}
})

const Content = ({data, spacing = 3}) => {
	const {title, items} = data;

	return (
		<Stack direction="column" spacing={spacing}>
			<Typography variant="h4">
				{title}
			</Typography>
			{items.map(({key, content}) => (
				<StyledTypography key={key} variant="body1">
					{content}
				</StyledTypography>
			))}
		</Stack>
	)
}

const Home = () => {
	const {parallaxRef} = useSidebarState();

	return (
		<Box
			component="main"
			sx={{minHeight: '100vh'}}
		>
			<Parallax pages={20} ref={parallaxRef}>
				<ParallaxLayer sticky={{start: 0, end: 2}}>
					<Grid
						container
						component={Container}
						alignItems="center"
						sx={{height: '100%'}}
					>
						<Grid item xs={6}>
							<Content data={overviewContent} />
						</Grid>
					</Grid>
				</ParallaxLayer>
				{overviewSlides.map(({src, key, alt}, index) => (
					<ParallaxLayer key={key} offset={(index)} speed={0.2}>
						<Grid
							container
							component={Container}
							alignItems="center"
							justifyContent="flex-end"
							sx={{height: '100%'}}
						>
							<Grid item xs={6} sx={{height: theme => theme.spacing(70)}}>
								<FullHeightBox sx={{
									width: '100%',
									position: 'relative'
								}}>
									<Image
										src={src}
										alt={alt}
										layout="fill"
										objectFit='cover'
									/>
								</FullHeightBox>
							</Grid>
						</Grid>
					</ParallaxLayer>
				))}
				<ParallaxLayer offset={3} speed={-0.2}>
					<FullHeightBox component={Container} display="flex" justifyContent="center" flexDirection="column">
						<Typography variant="h3" my={6} textAlign="center">
							OBJECTIVE
						</Typography>
						<Grid container spacing={4}>
							<Grid item xs={6}>
								<StyledGradientCard>
									<Typography variant="h4" className="title">
										EDUCATE
									</Typography>
									<Typography className="content">
										Men that their scalp is biologically different from women's and needs a shampoo
										catered especially for them in order to effectively fight against dandruff.
									</Typography>
								</StyledGradientCard>
							</Grid>
							<Grid item xs={6}>
								<StyledGradientCard>
									<Typography variant="h4" className="title">
										RECRUIT
									</Typography>
									<Typography className="content">
										50% of Vietnamese Gen Z, from 16+ Male, living in GT4 (Ha Noi, Ho Chi Minh, Da Nang, Can Tho),
										currently using unisex or female shampoo, to use Clear Men to end their dandruff problem.
									</Typography>
								</StyledGradientCard>
							</Grid>
						</Grid>
					</FullHeightBox>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={1}>
					<FullHeightBox
						display="flex"
						justifyContent="center"
						alignItems="center"
						position="relative"
					>
						<Image
							width={640}
							height={640}
							objectFit="cover"
							src="/target-audience.png"
							alt="Section background"
							style={{opacity: '60%'}}
						/>
					</FullHeightBox>
				</ParallaxLayer>
				<ParallaxLayer offset={4.4} speed={0.2}>
					<Typography variant="h2" textAlign="center">
						TARGET AUDIENCE
					</Typography>
				</ParallaxLayer>
				<ParallaxLayer offset={5} speed={0.2}>
					<FullHeightBox component={Container}>
						<FullHeightBox
							display="flex"
							justifyContent="center"
							flexDirection="column"
							sx={{height: '100%'}}
						>
							<Grid container>
								<Grid
									item
									xs={3}
									mb={2}
									sx={{height: theme => theme.spacing(25)}}
									position="relative"
								>
									<Image
										layout="fill"
										src="/genz-1.png"
										alt="GenZ Illustration"
									/>
								</Grid>
							</Grid>
							<Grid container>
								<Grid item xs={2} />
								<Grid
									item
									xs={3}
									mb={2}
									sx={{height: theme => theme.spacing(25)}}
									position="relative"
								>
									<Image
										layout="fill"
										src="/genz-2.png"
										alt="GenZ Illustration"
									/>
								</Grid>
							</Grid>
							<Grid container>
								<Grid item xs={1} />
								<Grid
									item
									xs={3}
									mb={2}
									sx={{height: theme => theme.spacing(25)}}
									position="relative"
								>
									<Image
										layout="fill"
										src="/genz-3.png"
										alt="GenZ Illustration"
									/>
								</Grid>
							</Grid>
						</FullHeightBox>
					</FullHeightBox>
				</ParallaxLayer>
				<ParallaxLayer offset={5} speed={0.1}>
					<Grid
						container
						component={Container}
						justifyContent="flex-end"
						alignItems="center"
						sx={{height: '100%'}}
					>
						<Grid item xs={6}>
							<Content data={genzContent} />
						</Grid>
					</Grid>
				</ParallaxLayer>
				<ParallaxLayer offset={6} speed={-0.2}>
					<Grid
						container
						component={Container}
						alignItems="center"
						sx={{height: '100%'}}
					>
						<Grid item xs={6}>
							<Content data={reasonToChoose} />
						</Grid>
					</Grid>
				</ParallaxLayer>
				<ParallaxLayer offset={6} speed={0.2}>
					<FullHeightBox component={Container}>
						<FullHeightBox
							display="flex"
							justifyContent="center"
							flexDirection="column"
							sx={{height: '100%'}}
						>
							<Grid container justifyContent="flex-end">
								<Grid
									item
									xs={3}
									mb={2}
									sx={{height: theme => theme.spacing(25)}}
									position="relative"
								>
									<Image
										layout="fill"
										src="/social-media-1.png"
										alt="Social media illustration"
									/>
								</Grid>
							</Grid>
							<Grid container justifyContent="flex-end">
								<Grid
									item
									xs={3}
									mb={2}
									sx={{height: theme => theme.spacing(25)}}
									position="relative"
								>
									<Image
										layout="fill"
										src="/social-media-2.png"
										alt="Social media illustration"
									/>
								</Grid>
								<Grid item xs={2} />
							</Grid>
						</FullHeightBox>
					</FullHeightBox>
				</ParallaxLayer>
				<ParallaxLayer offset={7} speed={0.3}>
					<FullHeightBox component={Container}>
						<Anchor name={SIDEBAR_ITEMS.Story} />
						<Typography variant="h2" textAlign="center" my={6}>
							THE CONTEXT
						</Typography>
						<Grid container spacing={3}>
							{genzStatistic.map(({key, number, content}) => (
								<Grid item key={key} xs={4}>
									<GradientCard>
										<Typography variant="h3" mb={2.5}>
											{number}
										</Typography>
										<Typography>
											{content}
										</Typography>
									</GradientCard>
								</Grid>
							))}
						</Grid>
					</FullHeightBox>
				</ParallaxLayer>
				<ParallaxLayer offset={8} spead={0.2}>
					<Container sx={{height: '100%'}}>
						<Typography my={4} mb={6} variant="h4" textAlign="center">
							OVERALL STATISTIC
						</Typography>
						<RefProvider>
							{ref => (
								<>
									<Parallax ref={ref} pages={chartContent.length} horizontal>
										{chartContent.map(({title, chart, description, speed}, index) => (
											<ParallaxLayer key={title} offset={index} speed={speed} style={{width: '1200px'}}>
												<Grid container spacing={8}>
													<Grid item xs={7}>
														{chart}
													</Grid>
													<Grid item xs={4}>
														<Typography variant="h4" mb={3}>
															{title}
														</Typography>
														<Typography>
															{description}
														</Typography>
													</Grid>
												</Grid>
											</ParallaxLayer>
										))}
									</Parallax>
									<ParallaxController pages={chartContent.length} />
								</>
							)}
						</RefProvider>
					</Container>
				</ParallaxLayer>
				<ParallaxLayer offset={9} speed={-0.2}>
					<FullHeightBox sx={{
						backgroundImage: `url("/dirt.gif")`,
						backgroundSize: 'cover',
					}}/>
				</ParallaxLayer>
				<ParallaxLayer offset={9.4} speed={-0.2}>
					<Anchor name={SIDEBAR_ITEMS.Insight} />
					<Typography variant="h2" textAlign="center">
						INSIGHT
					</Typography>
				</ParallaxLayer>
				{insightContent.map(({key, background, content, speed}, index) => {
					const contentIndex = index + 10;
					return (
						<Fragment key={key}>
							<ParallaxLayer offset={contentIndex}>
								<FullHeightBox sx={{
									backgroundImage: `url("${background}")`,
									backgroundSize: 'cover',
									zIndex: -1,
									position: 'relative',
									top: 0,
									lefT: 0,
									width: '100%',
									height: '100%',
								}}>
									<FullHeightBox sx={{
										backgroundColor: '#333333',
										opacity: 0.4,
									}}/>
								</FullHeightBox>

							</ParallaxLayer>
							<ParallaxLayer offset={contentIndex + 0.5} speed={speed}>
								<Container>
									{(index === insightContent.length - 1) && (
										<Anchor name={SIDEBAR_ITEMS.Insight} />
									)}
									<Typography
										variant="h4"
										textAlign="center"
										zIndex={5}
										lineHeight={1.75}
										fontWeight={400}
										sx={{transform: 'translateY(-50%)'}}
									>
										{content}
									</Typography>
								</Container>
							</ParallaxLayer>
						</Fragment>
					)
				})}
				<ParallaxLayer offset={13} speed={0.2}>
					<FullHeightBox
						display="flex"
						justifyContent="center"
						alignItems="center"
						sx={{
							backgroundImage: `url("/bg-gradient.svg")`,
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center center'
					}}
					>
						<Anchor name={SIDEBAR_ITEMS.BigIdea} />
						<Typography variant="h2" textAlign="center">
							BIG IDEA
						</Typography>
					</FullHeightBox>
				</ParallaxLayer>
				<ParallaxLayer offset={14} speed={0.2}>
					<FullHeightBox component={Container}>
						<FullHeightBox container component={Grid}>
							<Grid item xs={8} sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}>
								<Box
									sx={{height: theme => theme.spacing(70)}}
									position="relative"
								>
									<Image
										layout="fill"
										alt="Section illustrator"
										src="/successfully.png"
										objectFit="cover"
									/>
								</Box>
							</Grid>
						</FullHeightBox>
					</FullHeightBox>
				</ParallaxLayer>
				<ParallaxLayer offset={14.5} speed={0.4}>
					<Container>
						<Grid container justifyContent="flex-end">
							<Grid item xs={8}>
								<Typography>
									There is a perception that successful people are messy, while melodious people don't have time to focus on work.
									However, Gen Z always wants to be a dynamic, ambitious but always elegant young person.
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</ParallaxLayer>
				<ParallaxLayer offset={15} speed={-0.1}>
					<Container>
						<Grid container justifyContent="center">
							<Grid item xs={6}>
								<Image
									width={552}
									height={552}
									alt="Section illustrator"
									src="/creative.svg"
									objectFit="cover"
								/>
							</Grid>
						</Grid>
					</Container>
				</ParallaxLayer>
				<ParallaxLayer offset={15} speed={0.5}>
					<FullHeightBox component={Container}>
						<Grid
							container
							direction="column"
							justifyContent="center"
							rowGap={5}
							alignItems="center"
						>
							<Grid item xs={6}>
								<Typography>
									To help young people always look elegant but still have time to do what they love,
									we deliver this idea:
								</Typography>
							</Grid>
							<Grid item xs={8}>
								<Typography variant="h4" textAlign="center" fontWeight={400}>
									“Keeping up with the hectic life or embracing yourself ? Why not both with Clear Men ?”
								</Typography>
							</Grid>
						</Grid>
					</FullHeightBox>
				</ParallaxLayer>
				<ParallaxLayer sticky={{start: 16, end: 20}}>
					<FullHeightBox component={Container}>
						<Grid
							container
							justifyContent="flex-end"
							alignItems="center"
							sx={{height: '100%'}}
						>
							<Grid item xs={6} display="flex" justifyContent="flex-end">
								<Image
									width={552}
									height={420}
									alt="Section illustrator"
									src="/tvc.png"
									objectFit="cover"
								/>
							</Grid>
						</Grid>
					</FullHeightBox>
				</ParallaxLayer>
				{bigIdeaSteps.map(({key, content}, index) => (
					<ParallaxLayer key={key} offset={16 + index + 0.4} speed={0.1}>
						<FullHeightBox component={Container}>
							<Grid container>
								<Grid item xs={6}>
									<Typography>
										{content}
									</Typography>
								</Grid>
							</Grid>
						</FullHeightBox>
					</ParallaxLayer>
				))}
			</Parallax>
		</Box>
	)
}

export default Home;
