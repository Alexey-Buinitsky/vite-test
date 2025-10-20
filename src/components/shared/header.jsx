import { AppBreadcrumb } from "./app-breadcrumb"
import { AppTableActions } from "./app-table/app-table-actions"
import { Title } from "../ui"


export const Header = () => {
	return (
		<header className="header">

			<div className="header__top">
				<AppBreadcrumb />
				<Title variant="h1" size="h2">Пользователи</Title>
			</div>

			<AppTableActions />

		</header>
	)
}