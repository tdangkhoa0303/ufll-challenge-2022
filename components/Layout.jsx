import Box from '@mui/material/Box';
import React, {useState} from 'react';
import {SIDEBAR_ITEMS} from '../constants';
import {Appbar} from './Appbar';
import {Sidebar} from './Sidebar';
import {SidebarContextProvider} from './Sidebar.context';

export const Layout = ({children}) => {
	const [currentSection, setCurrentSection] = useState(SIDEBAR_ITEMS.Story);

	return (
		<SidebarContextProvider value={{
			item: currentSection,
			onDisplay: setCurrentSection,
		}}>
			<Box sx={{backgroundColor: '#010413', minHeight: '100vh'}}>
				<Appbar />
				<Sidebar />
				{children}
			</Box>
		</SidebarContextProvider>
	)
}