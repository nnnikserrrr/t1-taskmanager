import { useSortable } from '@dnd-kit/sortable'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState } from 'react'
import type { Column, Id } from '../../Kanban/types/types.ts'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {CSS} from "@dnd-kit/utilities"
import Input from '@mui/material/Input';

interface Props {
	column: Column
	deleteColumn: (id: Id) => void
}

export const ColumnContainer = (props: Props) => {
	const {column, deleteColumn} = props
	
	const [editMode, setEditMode] = useState(false)
	
	const {setNodeRef, attributes, listeners,transform, transition} = useSortable({
		id: column.id,
		data: {
			type: 'column',
			column
		}
	})
	
	const style = {
		transition,
		transform: CSS.Transform.toString(transform)
	}
	
	return (
		<Box ref={setNodeRef} style = {style} component={'div'} sx={{display: 'flex', flexDirection: 'column',backgroundColor: '#6fa7e4', width:'350px', height:'500px', borderRadius:'10px'}}>
			<Box sx = {{display: 'flex'}}>
					<Box component={'div'} sx = {{backgroundColor:'#d6e6f7', height: '35px', borderRadius: '10px', fontWeight: '600', margin:'4px 4px 0px 4px', display: 'flex', flexGrow:'1', alignItems : 'center'}}>
					<Box className = 'quantityOfItems' sx = {{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#98c0eb', ml: '10px', padding:'2px 7px 2px 7px', mr: '5px', borderRadius: '50%'}}>0</Box>
					<Box onClick = {() => {setEditMode(true)}} {...attributes} {...listeners} sx = {{display: 'flex', flexGrow: '1', cursor: 'grab'}}>{!editMode && column.title} {editMode && <Input autoFocus={true} onBlur={() => {setEditMode(false)}} onKeyDown={e => {
						if (e.key !== "Enter") return;
						setEditMode(false)
					}}/>}</Box>
						<Button size={'small'} onClick={() => {deleteColumn(column.id)}} > <DeleteForeverIcon /></Button>
					</Box>
				
			</Box>
			<Box component={'div'} sx = {{display: 'flex', flexGrow:'1', backgroundColor:'#d6e6f7', margin: '4px', borderRadius: '10px'}}>Content</Box>
			<Box component={'div'} sx = {{display: 'flex', borderRadius: '10px', backgroundColor: '#d6e6f7', m: '0px 4px 4px 4px'}}>Footer</Box>
		</Box>
	)

}