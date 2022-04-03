import {noop} from 'lodash/util';
import {createContext, useContext} from 'react';
import {SIDEBAR_ITEMS} from '../constants';

const SidebarContext = createContext({
	item: SIDEBAR_ITEMS.Story,
	onDisplay: noop,
})

export const useSidebarState = () => useContext(SidebarContext);

export const SidebarContextProvider = SidebarContext.Provider;