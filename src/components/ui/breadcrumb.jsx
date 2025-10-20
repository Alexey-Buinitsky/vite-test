function Breadcrumb({ className, children, ...props }) {
	return (
		<nav aria-label="breadcrumb" data-slot="breadcrumb" className={["breadcrumb", className].filter(Boolean).join(" ")} {...props}>
			{children}
		</nav>
	)
}

function BreadcrumbList({ className, children, ...props }) {
	return (
		<ol data-slot="breadcrumb-list" className={["breadcrumb__list", className].filter(Boolean).join(" ")} {...props}>
			{children}
		</ol>
	)
}

function BreadcrumbItem({ className, ...props }) {
	return (
		<li data-slot="breadcrumb-item" className={["breadcrumb__item", className].filter(Boolean).join(" ")} {...props} />
	)
}

function BreadcrumbLink({ className, href, children, ...props }) {
	return (
		<a data-slot="breadcrumb-link" href={href} className={["breadcrumb__link", className].filter(Boolean).join(" ")} {...props}>
			{children}
		</a>
	)
}

function BreadcrumbPage({ className, ...props }) {
	return (
		<span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" className={["breadcrumb__page", className].filter(Boolean).join(" ")} {...props} />
	)
}

function BreadcrumbSeparator({ className, children = "/", ...props }) {
	return (
		<li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className={["breadcrumb__separator", className].filter(Boolean).join(" ")} {...props}>
			{children}
		</li>
	)
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, }