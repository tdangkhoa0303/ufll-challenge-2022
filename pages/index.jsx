import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import Image from 'next/image';
import Link from 'next/link';
import React, {Fragment} from 'react';
import {Anchor, Sidebar} from '../components';
import {GradientCard} from '../components/GradientCard';
import {ParallaxController} from '../components/ParallaxController';
import {RefProvider} from '../components/Ref.context';
import {useSidebarState} from '../components/Sidebar.context';
import {SIDEBAR_ITEMS} from '../constants';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
	bigIdeaSteps,
	chartContent,
	genzContent,
	genzStatistic,
	insightContent,
	longPlans,
	overviewContent,
	overviewSlides,
	reasonToChoose,
	shortPlans
} from '../data';

const StyledTypography = styled(Typography)(() => ({
	lineHeight: 2.4
}));

const FullHeightBox = styled(Box)(() => ({
	height: '100%'
}));

const StyledPlanCard = styled(GradientCard)(({theme}) => ({
	padding: theme.spacing(2),
	height: 'fit-content',
	alignItems: 'flex-start',
	textAlign: 'left',
}))

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

const MenuItem = ({isActive, title}) => {
	return (
		<Box display="flex" mb={2}>
			<Box mr={1}>
				{isActive ? (
					<Image
						width={24}
						height={24}
						alt="burger-menu"
						src='/burger.svg'
					/>
				) : (
					<Box width={24} />
				)}
			</Box>
			<Typography variant="h6" fontWeight={isActive ? 700: 400}>
				{title}
			</Typography>
		</Box>
	)
}

const PlanCard = ({index, name, slug}) => (
	<Link passHref href={`/plans/${slug}`}>
		<Box component="a" target="_blank" sx={{textDecoration: 'none'}}>
			<StyledPlanCard>
				<Typography variant="body2" mb={2} fontWeight={700}>
					{index + 1}.
				</Typography>
				<Typography
					mb={1}
					variant="body2"
					fontWeight={700}
					sx={{
						lineHeight: theme => theme.spacing(3),
						height: theme => theme.spacing(6)
					}}
				>
					{name}
				</Typography>
				<ArrowForwardIcon sx={{alignSelf: 'flex-end'}} color="primary" />
			</StyledPlanCard>
		</Box>
	</Link>
)

const CrepeMenu = ({current}) => {
	return (
		<Box my={8}>
			<MenuItem title="SHORT TERM" isActive={current === 'short'} />
			<MenuItem title="LONG TERM" isActive={current === 'long'} />
			<MenuItem title="MEASUREMENT" isActive={current === 'measurement'} />
		</Box>
	)
}

const Home = () => {
	const {parallaxRef} = useSidebarState();

	return (
		<>
			<Sidebar />
			<Box
				component="main"
				sx={{minHeight: '100vh'}}
			>
				<Parallax pages={25} ref={parallaxRef}>
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
								OVERALL STATISTICS
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
										<Typography lineHeight={2}>
											{content}
										</Typography>
									</Grid>
								</Grid>
							</FullHeightBox>
							{(index === bigIdeaSteps.length - 1) && (
								<Anchor name={SIDEBAR_ITEMS.BigIdea} />
							)}
						</ParallaxLayer>
					))}
					<ParallaxLayer offset={21} speed={0.2}>
						<FullHeightBox
							display="flex"
							justifyContent="center"
							alignItems="center"
						>
							<Anchor name={SIDEBAR_ITEMS.DeploymentPlan} />
							<Typography variant="h2" textAlign="center">
								DEPLOYMENT PLAN
							</Typography>
						</FullHeightBox>
					</ParallaxLayer>
					<ParallaxLayer offset={22} speed={-0.1}>
						<FullHeightBox component={Container}>
							<CrepeMenu current="short" />
							<Typography variant="body2" mb={2} fontWeight={700}>
								4 - 6 months
							</Typography>
							<Grid container spacing={3}>
								{shortPlans.map(({key, name, slug}, index) => (
									<Grid item key={key} xs={4}>
										<PlanCard name={name} slug={slug} index={index} />
									</Grid>
								))}
							</Grid>
						</FullHeightBox>
					</ParallaxLayer>
					<ParallaxLayer offset={23} speed={0.2}>
						<FullHeightBox component={Container}>
							<CrepeMenu current="long" />
							<Typography variant="body2" mb={2} fontWeight={700}>
								Greater than 6 months
							</Typography>
							<Grid container spacing={3}>
								{longPlans.map(({key, name, slug}, index) => (
									<Grid item key={key} xs={4}>
										<PlanCard name={name} slug={slug} index={index} />
									</Grid>
								))}
							</Grid>
						</FullHeightBox>
					</ParallaxLayer>
					<ParallaxLayer offset={24.1} speed={-0.1}>
						<FullHeightBox component={Container}>
							<Grid container spacing={3}>
								<Grid item xs={4}>
									<CrepeMenu current="measurement" />
								</Grid>
							</Grid>
						</FullHeightBox>
					</ParallaxLayer>
					<ParallaxLayer offset={24.2} speed={0.2}>
						<FullHeightBox component={Container}>
							<Grid container justifyContent="flex-end" mt={4}>
								<Grid item xs={8}>
									<Stack spacing={4}>
										<Stack spacing={2}>
											<Typography variant="h6" fontWeight={700}>
												MEASUREMENT
											</Typography>
											<Typography variant="body2">
												We set KPI for our campaign as below
											</Typography>
										</Stack>
										<Stack spacing={2}>
											<Typography variant="h6" fontWeight={700}>
												Awareness:
											</Typography>
											<Typography variant="body2">
												Minimum 100 people register to participate in the Campaign “Makeover with Clear Men” (5 weeks).
											</Typography>
											<Typography variant="body2">
												Minimum reach 500.000 samples in GT4 in the first 2 months and must be get surveys of at least 67% to from the correct target gen Z customer.
											</Typography>
										</Stack>
										<Stack spacing={2}>
											<Typography variant="h6" fontWeight={700}>
												Penetration:
											</Typography>
											<Typography variant="body2">
												Market share is increasing at minimum 10% (first 6 months)
											</Typography>
											<Typography variant="body2">
												For PR & TVC, it will reach to at least 12M viewers.  including 92% from Gen Z as report from Youtube.
											</Typography>
											<Typography variant="body2">
												→ It is estimated that will reach about 53% of gen Z in GT4.
											</Typography>
										</Stack>
										<Stack spacing={2}>
											<Typography variant="h6" fontWeight={700}>
												Retention:
											</Typography>
											<Typography variant="body2">
												Market share is increasing at minimum 15% (1 year)
											</Typography>
										</Stack>
									</Stack>
								</Grid>
							</Grid>
						</FullHeightBox>
					</ParallaxLayer>
				</Parallax>
			</Box>
		</>
	)
}

export default Home;
