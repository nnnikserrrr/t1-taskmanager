import Box from '@mui/material/Box'
import { TaskItems } from '../../../widgets/TaskList'

export const MainPage = () => {
	return (
		<>
			<Box component='div' sx={
				{
					display: 'flex',
					maxHeight: '100%',
					height: '100%',
					width: '100%',
					justifyContent: 'center'
				}
			}>
				<TaskItems />
			</Box>
		</>
	)
}