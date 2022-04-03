import {ListItem} from '@mui/material';
import Box from '@mui/material/Box';
import React, {useCallback} from 'react';
import {SECTION_INDEX_MAP, SIDEBAR_ITEMS} from '../constants';
import {useSidebarState} from './Sidebar.context';

const menuItems = [
	{
		name: SIDEBAR_ITEMS.Story,
		label: 'STORY',
	},
	{
		name: SIDEBAR_ITEMS.Insight,
		label: 'INSIGHT',
	},
	{
		name: SIDEBAR_ITEMS.BigIdea,
		label: 'BIG IDEA',
	},
	{
		name: SIDEBAR_ITEMS.DeploymentPlan,
		label: 'DEPLOYMENT PLAN',
	}
]

const SideBarItem = ({name, children, current}) => {
	const {parallaxRef, onDisplay} = useSidebarState();

	const onClickItem = useCallback(() => {
		parallaxRef.current && parallaxRef.current.scrollTo(SECTION_INDEX_MAP[name])
	}, [name, onDisplay])

	return (
		<ListItem
			onClick={onClickItem}
			sx={{
				cursor: 'pointer',
				fontWeight: current ? 700: 400,
				padding: theme => theme.spacing(3, 0),
				color: '#ffffff'
		}}>
			{children}
		</ListItem>
	)
}

export const Sidebar = ({}) => {
	const {item} = useSidebarState();

	return (
		<Box
			position="fixed"
			top={0}
			right={0}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderLeft: '1px solid #212121',
				padding: theme => theme.spacing(0, 6),
				writingMode: 'vertical-rl',
				textOrientation: 'mixed',
				height: '100%',
				zIndex: 1,
			}}
		>
			{menuItems.map(({name, label}) => (
				<SideBarItem
					key={name}
					name={name}
					current={item === name}
				>
					{label}
				</SideBarItem>
			))}
		</Box>
	)
}