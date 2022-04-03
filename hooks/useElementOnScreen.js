import {useCallback, useEffect, useRef, useState} from 'react';

export const useElementOnScreen = (options) => {
	const [visible, setVisible] = useState(false);
	const elementRef = useRef(null);

	const onVisible = useCallback(
		(entities) => {
			const [entry] = entities;
			if (visible !== entry.isIntersecting) {
				setVisible(entry.isIntersecting);
			}
		},
		[setVisible, visible],
	);

	useEffect(() => {
		const observer = new IntersectionObserver(onVisible, {
			threshold: 0.2,
			...options,
		});
		const element = elementRef.current;
		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, [options, elementRef, onVisible]);

	return [elementRef, visible];
};