import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export const Header = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="relative">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>

						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							TASKS
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}