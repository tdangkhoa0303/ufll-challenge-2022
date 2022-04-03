import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import React, {useCallback, useState} from 'react';
import {useRefInContext} from './Ref.context';

export const ParallaxController = ({pages}) => {
	const ref = useRefInContext()
	const [index, setIndex] = useState(0);

	const onNext = useCallback(() => {
		const nextIndex = index === pages - 1 ? 0 : index + 1;
		ref.current.scrollTo(nextIndex);
		setIndex(nextIndex);
	}, [index, setIndex]);

	const onPrev = useCallback(() => {
		const nextIndex = index === 0 ? pages - 1 : index - 1;
		ref.current.scrollTo(nextIndex);
		setIndex(nextIndex);
	}, [index, setIndex]);

	return (
		<Box display="flex" alignItems="flex-end" justifyContent="flex-end" sx={{height: '50%'}}>
			<IconButton onClick={onPrev} sx={{marginRight: 1}}>
				<ArrowBackIosIcon sx={{color: '#FFFFFF'}} />
			</IconButton>
			<IconButton onClick={onNext}>
				<ArrowForwardIosIcon sx={{color: '#FFFFFF'}} />
			</IconButton>
		</Box>
	)
}