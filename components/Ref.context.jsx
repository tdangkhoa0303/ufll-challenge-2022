import {createContext, createRef, useContext, useRef} from 'react';

const RefContext = createContext(createRef())

export const useRefInContext = () => useContext(RefContext);

export const RefProvider = ({children}) => {
	const ref = useRef(null);

	return <RefContext.Provider value={ref}>{children && children(ref)}</RefContext.Provider>
};