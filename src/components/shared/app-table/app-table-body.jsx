import { TableBody, TableRow, TableCell } from '../../ui'

export const AppTableBody = ({ users, columns }) => {
	return (
		<TableBody>
			{users.map((user) => (
				<TableRow key={user.id}>
					{columns.map((column) => (
						<TableCell key={column.key} className={column.className || ''}>
							{column.render(user)}
						</TableCell>
					))}
				</TableRow>
			))
			}
		</TableBody >
	)
}