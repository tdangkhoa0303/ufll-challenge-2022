import React, {useEffect} from 'react';
import {useElementOnScreen} from '../hooks';
import {useSidebarState} from './Sidebar.context';

export const Anchor = ({name}) => {
	const [ref, visible] = useElementOnScreen();
	const {onDisplay} = useSidebarState();

	useEffect(() => {
		if(visible) {
			onDisplay(name);
		}
	})

	return (
		<div ref={ref} />
	)
}