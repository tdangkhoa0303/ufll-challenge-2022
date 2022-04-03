import {Container, Grid} from "@mui/material";
import Box from '@mui/material/Box';
import Image from "next/image";

export const Appbar = () => {
	return (
		<Container sx={{
			height: 'fit-content',
			position: 'fixed',
			zIndex: 1,
			left: '50%',
			transform: 'translateX(-50%)',
			top: 0,
			width: '100%',
			padding: theme => theme.spacing(6, 0, 0)
		}}>
			<Grid
				container
				justifyContent="space-between"
			>
				<Grid item xs={1}>
					<Box position="relative" height={40}>
						<Image
							layout="fill"
							src="/logo.svg"
							alt="KOVA Logo"
						/>
					</Box>
				</Grid>
				<Grid item xs={1}>
					<Box position="relative" height={40}>
						<Image
							layout="fill"
							src="/clear-logo.svg"
							alt="CLEAR Logo"
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}