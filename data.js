import React from 'react';
import {HairProblemChart} from './components';
import {MenFreeTimeActivity} from './components/MenFreeTimeActivity';
import {SocialMediaChart} from './components/SocialMediaChart';

export const overviewContent = {
	title: 'OVERVIEW',
	items: [
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
}

export const genzContent = {
	title: 'GEN Z',
	items: [
		{
			key: 'item-1',
			content: 'Gen Z who have income ≥ 2,4 million/month',
		},
		{
			key: 'item-2',
			content: 'Location: GT4 HCMC, Da Nang, Ha Noi, Can Tho'
		},
		{
			key: 'item-3',
			content: 'Active, busy, want to optimize time, need the convenience.',
		},
		{
			key: 'item-4',
			content: 'Familiar with technology, can determine their chooses.',
		},
	]
}

export const overviewSlides = [
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

export const genzStatistic = [
	{
		key: '11',
		number: '75%',
		content: <>men in Vietnam <b>do not</b> use men’s shampoo</>
	},
	{
		key: '12',
		number: '1/3',
		content: 'population in Vietnam'
	},
	{
		key: '13',
		number: '65%',
		content: 'research the origin of their purchases'
	},
	{
		key: '14',
		number: '50%',
		content: 'men in Vietnam use men’s shampoo'
	},
	{
		key: '15',
		number: '75%',
		content: 'ware wiling to pay more for a sustainable product'
	},
	{
		key: '16',
		number: '2/3',
		content: 'research the origin of their purchases'
	}
]

export const reasonToChoose = {
	title: 'Why do we choose?',
	items: [
		{
			key: 'item-1',
			content: 'They have a relatively low income, so they will be sensitive to prices. Therefore, they will consider carefully before making a decision.',
		},
		{
			key: 'item-2',
			content: 'In addition, the information channel they rely on is largely from social media. We can step up and take advantage of this opportunity.'
		},
	]
}

export const insightContent = [
	{
		key: 'key-1',
		speed: -0.2,
		background: 'feel-mountain.jpg',
		content:
			<>As <b>a Gen-Zer who can earn income and make decisions by myself</b>, I want to <b>explore and evaluate new products through researches before purchasing.</b> I am often <b>influenced by micro influencers</b> instead of macro
				influencers because of their <b>familiarity and reliability</b>, which helps me <b>make lucid buying decisions.</b></>
	},
	{
		key: 'key-2',
		speed: -0.1,
		background: 'e-commerce.jpg',
		content:
			<>As <b>a digital native</b>, I want to <b>shop online</b> so I <b>can save moving time, evaluate the products beforehand</b>, and avoid being constrained by <b>physical distance</b></>,
	},
	{
		key: 'key-3',
		speed: 0.2,
		background: 'beautiful-portrait.jpg',
		content:
			<>As <b>a proactive Gen-Zer with tight schedules</b>, I want <b>convenience and practicability</b> from my products so I can <b>save time for my passions.</b></>,
	}
];

export const chartContent = [
	{
		chart: <HairProblemChart />,
		title: 'Men Hair Problem',
		description: 'Main hair problem of men is dandruff with 28%.',
		speed: 0,
	},
	{
		chart: <MenFreeTimeActivity />,
		title: 'How men spend on their free time',
		description: 'Social media in the top free time activities of men with 54%.',
		speed: 0.2
	},
	{
		chart: <SocialMediaChart />,
		title: 'Social media trend 2021 vs 2022',
		description: 'Tiktok is becoming the trending social media in 2022 (increase immediately from 5% to 14%).',
		speed: -0.1
	}
]

export const bigIdeaSteps = [
	{
		key: 'step1',
		content: 'We will promote the convenience and fastness of Clear Men 3 in 1 through a TVC:',
	},
	{
		key: 'step2',
		content: 'They often have to stay up at night to work and often get up late every morning. ' +
			'Therefore, they do not have much time to thoroughly care themselves with many steps, leading to greasy hair and dandruff. ' +
			'So, they lack confidence when meeting friends, colleagues and present in front of a crowd. ' +
			'Their ability is not shown and not appreciated, they can not win scholarships and be promoted in work.',
	},
	{
		key: 'step3',
		content: 'Since knowing Clear Men 3 in 1, instead of using many steps, they only need 2 bumps of Clear Men 3 in 1 to care for both hair and body. ' +
			'It only takes them 7 minutes to shower and be on time to go to school and work but still ensure refreshing and elegant look.',
	},
	{
		key: 'step4',
		content: 'Since using Clear Men 3 in 1, they have been more confident and have been able to do many things they love get what they want.',
	},
	{
		key: 'step5',
		content: 'Finally, will show the saying “Keeping up with the hectic life or embracing yourself ? Why not both with Clear Men?”',
	},
]