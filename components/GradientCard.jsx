import Box from '@mui/material/Box';
import React from 'react';

export const GradientCard = ({children, ...restProps}) => {
	return (
		<Box
			sx={{
				height: theme => theme.spacing(34),
				position: 'relative',
				backgroundColor: '#010413',
				borderRadius: 1.5,
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
				padding: theme => theme.spacing(7, 6),
				transition: 'all 0.2s ease-in-out',

				'&:hover': {
					transform: 'translateY(-4px)',
				},

				'&:after': {
					position: 'absolute',
					top: '-2px',
					bottom: '-2px',
					left: '-2px',
					right: '-2px',
					background: 'linear-gradient(60.64deg, #338FFF 0%, #D3FBD8 100%)',
					content: "''",
					zIndex: -1,
					borderRadius: 1.5,
				}}
			}
			{...restProps}
		>
			{children}
		</Box>
	)
}