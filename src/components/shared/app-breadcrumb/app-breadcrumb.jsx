// import { useLocation } from 'react-router-dom';

// export const AppBreadcrumb = () => {

// const location = useLocation()

// if (location.pathname === '/') {
// 	return <AppBreadcrumbHome />
// }

// const pathSegments = location.pathname.split('/').filter(segment => segment !== '')

// const breadcrumbs = pathSegments.map((segment, index) => {
// 	const href = '/' + pathSegments.slice(0, index + 1).join('/')
// 	const label = segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// 	return { href, label, isCurrent: index === pathSegments.length - 1 }
// })

// return <AppBreadcrumbDefault breadcrumbs={breadcrumbs} />
// }

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../ui"

export const AppBreadcrumb = () => {

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">
						Данные
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>
						Пользователи
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}