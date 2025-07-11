import Box from '@mui/material/Box'
import { TaskList } from '../../../widgets/TaskList'

export const MainPage = () => {
	return (
		<>
			<Box component='section' sx={
				{
					display: 'flex',
					backgroundColor: '#d9f1fa',
					boxSizing: 'border-box',
					height: "100%",
					justifyContent:'center',
				}
			}>
				<TaskList />
			</Box>
		</>
	)
}