import React from 'react'
import { Table } from '../../ui'
import { AppTableHeader } from './app-table-header'
import { AppTableBody } from './app-table-body'
import { createTableColumns, getTheadsConfig, getTableBodyConfig } from './table-config'

import { useSortTable } from '../../../hooks'

import users from './../../../data/users'
import positionOptions from './../../../data/positionOptions'

export const AppTable = () => {
	const { sortConfig, handleSort, sortedUsers } = useSortTable()
	const [positionValues, setPositionValues] = React.useState({})

	const handlePositionChange = (userId, newValue) => {
		setPositionValues(prev => ({ ...prev, [userId]: newValue }))
	}

	const processedUsers = sortedUsers(users, positionValues)

	const columns = createTableColumns(positionValues, handlePositionChange, positionOptions)

	const theads = getTheadsConfig(columns)
	const tableBodyConfig = getTableBodyConfig(columns)

	return (
		<Table>
			<AppTableHeader
				theads={theads}
				sortConfig={sortConfig}
				onSort={handleSort}
			/>
			<AppTableBody
				users={processedUsers}
				columns={tableBodyConfig}
			/>
		</Table>
	)
}