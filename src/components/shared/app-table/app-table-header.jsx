import { TableHeader, TableRow, TableHead } from '../../ui'

export const AppTableHeader = ({ theads, sortConfig, onSort }) => {
	return (
		<TableHeader>
			<TableRow>
				{theads.map((thead) => {
					const isActive = sortConfig.key === thead.key
					const isAsc = sortConfig.direction === 'asc'

					return (
						<TableHead
							key={thead.key}
							className={`table__head ${thead.sortable ? 'table__head--sortable' : 'table__head--not-sortable'} ${isActive ? 'table__head--active' : ''}`}
							onClick={() => thead.sortable && onSort(thead.key)}
						>
							{thead.sortable && 
								<div className={`table__head-sort ${isActive ? (isAsc ? 'table__head-sort--asc' : 'table__head-sort--desc') : ''}`}>
									<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.24994 1.5C5.24994 1.08579 5.58573 0.75 5.99994 0.75C6.41416 0.75 6.74994 1.08579 6.74994 1.5V8.68945L8.96967 6.46973C9.26256 6.17683 9.73732 6.17683 10.0302 6.46973C10.3231 6.76262 10.3231 7.23738 10.0302 7.53027L6.53022 11.0303C6.23732 11.3232 5.76256 11.3232 5.46967 11.0303L1.96967 7.53027C1.67678 7.23738 1.67678 6.76262 1.96967 6.46973C2.24427 6.19512 2.67899 6.17766 2.97358 6.41797L3.03022 6.46973L5.24994 8.68945V1.5Z" fill="currentColor" />
									</svg>
								</div>
							}
							<span>{thead.label}</span>
							{thead.isTooltip && 
								<div className="table__head-icon" title={thead.tooltip}>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8ZM8 7.5C8.27614 7.5 8.5 7.72386 8.5 8V10.1667H8.66667C8.94281 10.1667 9.16667 10.3905 9.16667 10.6667C9.16667 10.9428 8.94281 11.1667 8.66667 11.1667H8C7.72386 11.1667 7.5 10.9428 7.5 10.6667V8.5H7.33333C7.05719 8.5 6.83333 8.27614 6.83333 8C6.83333 7.72386 7.05719 7.5 7.33333 7.5H8ZM8.00651 4.83333C8.28265 4.83333 8.50651 5.05719 8.50651 5.33333C8.50651 5.60948 8.28265 5.83333 8.00651 5.83333H8C7.72386 5.83333 7.5 5.60948 7.5 5.33333C7.5 5.05719 7.72386 4.83333 8 4.83333H8.00651ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z" fill="#5F6166" />
									</svg>
								</div>
							}
						</TableHead>
					)
				})}
			</TableRow>
		</TableHeader>
	)
}