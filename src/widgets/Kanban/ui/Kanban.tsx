import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useMemo, useState } from 'react'
import { ColumnContainer } from '../../ColumnContainer'
import type { Column, Id } from '../types/types.ts'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'

export const Kanban = () => {
	const [columns, setColumns] = useState<Column[]>([])
	const columnsId = useMemo(() => columns.map((col) => col.id), [columns])
	
	return (
		<Box component={'div'}>
			<DndContext  onDragEnd={onDragEnd}>
				<Button onClick={createNewColumn} variant='contained' sx={{ mt: '1%', mb: '10px', display: 'flex', width: 'auto' }}>Add a column</Button>
				<SortableContext items = {columnsId}>
					<Box component={'div'} sx={{ display: 'flex', gap: '15px', flexGrow: '1' }}>
					{columns.map(col => <div><ColumnContainer key={col.id} column={col} deleteColumn={deleteColumn} /></div>)}
					</Box>
				</SortableContext>
			</DndContext>
		</Box>
	
	)
	
	function createNewColumn() {
		const columnToAdd: Column = {
			id: generateId(),
			title: `Column ${columns.length + 1}`
		}
		
		setColumns([...columns, columnToAdd])
	}
	
	function generateId() {
		return Math.floor(Math.random() * 10001)
	}
	
	function deleteColumn(id: Id) {
		const filteredColumn = columns.filter((col) => col.id !== id)
		setColumns(filteredColumn)
	}
	
	
	function onDragEnd (event: DragEndEvent) {
		const {active, over} = event
		if (!over) return
		
		const activeColumn = active.id
		const overColumnId = over.id
		
		if (activeColumn === overColumnId) return
		
		setColumns(columns => {const activeColumnIndex = columns.findIndex(col => col.id === activeColumn)
		const overColumnIndex = columns.findIndex((col) => col.id === overColumnId)
			
			return arrayMove(columns, activeColumnIndex, overColumnIndex)
		})
	}
	
}


