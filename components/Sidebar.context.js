import {createContext, createRef, useContext} from 'react';
import {SIDEBAR_ITEMS} from '../constants';

const SidebarContext = createContext({
	item: SIDEBAR_ITEMS.Story,
	onDisplay: (name) => {},
	parallaxRef: createRef(),
})

export const useSidebarState = () => useContext(SidebarContext);

export const SidebarContextProvider = SidebarContext.Provider;