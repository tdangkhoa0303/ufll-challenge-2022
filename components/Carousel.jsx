import Box from '@mui/material/Box';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, {useCallback, useEffect, useState} from 'react';
import {DotButton} from './CarouselButtons';

export const Carousel = ({slides, ...containerProps}) => {
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [viewportRef, embla] = useEmblaCarousel({skipSnaps: false});

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

	const onSelect = useCallback(() => {
		console.log(embla)
		if (!embla) return;
		setSelectedIndex(embla.selectedScrollSnap());
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla, setSelectedIndex]);

	useEffect(() => {
		if (!embla) {
			return;
		}

		onSelect();
		setScrollSnaps(embla.scrollSnapList());
		embla.on('select', onSelect);
	}, [embla, setScrollSnaps, onSelect]);

	return (
		<Box position="relative">
			<Box
				sx={{
					position: 'relative',
					margin: 'auto'
				}}
				{...containerProps}
			>
				<Box
					ref={viewportRef}
					sx={{
						overflow: 'hidden',
						width: '100%',
						height: '100%',

						'&.is-draggable': {
							cursor: 'grab',
						},

						'&.is-dragging': {
							cursor: 'grabbing',
						}
					}}
				>
					<Box sx={{
						display: 'flex',
						userSelect: 'none',
						height: '100%',
						marginLeft: theme => theme.spacing(-1),
						WebkitTouchCallout: 'none',
						KhtmlUserSelect: 'none',
						WebkitTapHighlightColor: 'transparent',
					}}>
						{slides.map(({key, alt, src}) => (
							<Box
								key={key}
								sx={{
									position: 'relative',
									minWidth: '100%',
									height: '100%',
									paddingLeft: theme => theme.spacing(1),
								}}
							>
								<Box
									sx={{
										position: 'relative',
										overflow: 'hidden',
										height: '100%',
									}}
								>
									<Image
										src={src}
										alt={alt}
										layout="fill"
										objectFit='cover'
									/>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
				{/*<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />*/}
				{/*<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />*/}
			</Box>
			<Box sx={{
				display: 'flex',
				listStyle: 'none',
				position: 'absolute',
				right: theme => theme.spacing(-2),
				justifyContent: 'center',
				paddingTop: theme => theme.spacing(1),
				flexDirection: 'column',
				transform: 'translate(100%, -50%)',
				top: '50%'
			}}>
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						selected={index === selectedIndex}
						onClick={() => scrollTo(index)}
					/>
				))}
			</Box>
		</Box>
	);
};
