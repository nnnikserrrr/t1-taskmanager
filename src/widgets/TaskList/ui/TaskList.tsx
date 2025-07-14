import Box from '@mui/material/Box'
import { Kanban } from '../../Kanban'

export const TaskItems = () => {
	return (
		<Box sx = {{ width: '95%', height: '100%'}}>
			<Kanban />
		</Box>
	)
}