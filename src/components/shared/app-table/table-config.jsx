import { AppSelect } from './../../shared'
import { Button } from '../../ui'

export const createTableColumns  = (positionValues, onPositionChange, positionOptions) => [
	{ key: 'id', label: 'ID', sortable: true, render: (user) => <span className="table__cell-span">{user.id}</span> },
	{
		key: 'actions', label: '', sortable: false, className: 'table__cell--actions',
		render: () => (
			<Button variant="little-square" title="Редактирование" ariaLabel="Редактирование">
				<svg width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.11111 1.7225C3.111 2.33605 2.61336 2.83318 1.99979 2.83318C1.38631 2.83306 0.889227 2.33598 0.88911 1.7225C0.88911 1.10893 1.38624 0.611293 1.99979 0.611175C2.61344 0.611176 3.11111 1.10885 3.11111 1.7225ZM3.11111 5.99985C3.11111 6.6135 2.61344 7.11118 1.99979 7.11118C1.38624 7.11106 0.889109 6.61342 0.889109 5.99985C0.889227 5.38637 1.38631 4.88929 1.99979 4.88917C2.61336 4.88917 3.111 5.3863 3.11111 5.99985ZM3.11111 10.2778C3.11111 10.8915 2.61344 11.3892 1.99979 11.3892C1.38624 11.3891 0.889109 10.8914 0.889109 10.2778C0.889109 9.66427 1.38624 9.16663 1.99979 9.16651C2.61344 9.16651 3.11111 9.66419 3.11111 10.2778Z" fill="#FAFCFF" />
				</svg>
			</Button>
		)
	},
	{ key: 'role', label: 'Роль', sortable: true, isTooltip: true, tooltip: 'Роль пользователя в системе', render: (user) => <span className="table__cell-span">{user.role}</span> },
	{ key: 'name', label: 'Имя', sortable: true, render: (user) => <span className="table__cell-span">{user.name}</span> },
	{ key: 'login', label: 'Логин', sortable: true, render: (user) => <span className="table__cell-span">{user.login}</span> },
	{
		key: 'position', label: 'Должность', sortable: true,
		render: (user) => (
			<AppSelect
				value={positionValues[user.id] || user.position}
				onValueChange={(value) => onPositionChange(user.id, value)}
				options={positionOptions}
				placeholder="Выберите должность"
			/>
		)
	},
	{ key: 'contacts', label: 'Контакты', sortable: true, render: (user) => <span className="table__cell-span">{user.contacts}</span> },
	{ key: 'email', label: 'Почта', sortable: true, render: (user) => <span className="table__cell-span">{user.email}</span> },
	{ key: 'phone', label: 'Телефон', sortable: true, render: (user) => <span className="table__cell-span">{user.phone}</span> },
	{ key: 'city', label: 'Город', sortable: true, render: (user) => <span className="table__cell-span">{user.city}</span> }
]

export const getTheadsConfig = (columns) =>
	columns.map(({ key, label, sortable, isTooltip, tooltip }) => ({ key, label, sortable, ...(isTooltip && { isTooltip, tooltip }) }))

export const getTableBodyConfig = (columns) =>
	columns.map(({ key, render, className }) => ({ key, render, className }))