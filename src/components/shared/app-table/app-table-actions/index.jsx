import { AppTableSearch } from './app-table-search'
import { AppTableSettings } from './app-table-settings'
import { AppTableFiltration } from './app-table-filtration'
import { AppTableAddition } from './app-table-addition'
import { Separator } from './../../../ui'

export const AppTableActions = () => {

	return (
		<div className="table-actions">
			<div className="table-actions__search">
				<AppTableSearch />
			</div>
			<Separator className="table-actions__separator" orientation="vertical" />
			<div className="table-actions__controls">
				<div className="table-actions__square-controls">
					<AppTableSettings />
					<AppTableFiltration />
				</div>
				<AppTableAddition />
			</div>
		</div>
	)
}