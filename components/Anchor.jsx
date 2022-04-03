import React, {useEffect} from 'react';
import {useElementOnScreen} from '../hooks';

export const Anchor = ({name, onDisplay}) => {
	const [ref, visible] = useElementOnScreen();

	useEffect(() => {
		if(visible) {
			onDisplay(name);
		}
	})

	return (
		<div ref={ref} />
	)
}