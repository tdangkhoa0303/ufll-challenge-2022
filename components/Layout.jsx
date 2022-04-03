import Box from '@mui/material/Box';
import React, {useRef, useState} from 'react';
import {SIDEBAR_ITEMS} from '../constants';
import {Appbar} from './Appbar';
import {Sidebar} from './Sidebar';
import {SidebarContextProvider} from './Sidebar.context';

export const Layout = ({children}) => {
	const parallaxRef = useRef(null);
	const [currentSection, setCurrentSection] = useState(SIDEBAR_ITEMS.Story);

	return (
		<SidebarContextProvider value={{
			parallaxRef,
			item: currentSection,
			onDisplay: setCurrentSection,
		}}>
			<Box sx={{backgroundColor: '#010413', minHeight: '100vh'}}>
				<Appbar />
				{children}
			</Box>
		</SidebarContextProvider>
	)
}