function Table({ className, ...props }) {
	return (
		<div data-slot="table-container" className="table-container">
			<table data-slot="table" className={["table", className].filter(Boolean).join(" ")} {...props} />
		</div>
	)
}

function TableHeader({ className, ...props }) {
	return (
		<thead data-slot="table-header" className={["table__header", className].filter(Boolean).join(" ")} {...props} />
	)
}

function TableBody({ className, ...props }) {
	return (
		<tbody data-slot="table-body" className={["table__body", className].filter(Boolean).join(" ")} {...props} />
	)
}

function TableFooter({ className, ...props }) {
	return (
		<tfoot data-slot="table-footer" className={["table__footer", className].filter(Boolean).join(" ")} {...props} />
	)
}

function TableRow({ className, ...props }) {
	return (
		<tr data-slot="table-row" className={["table__row", className].filter(Boolean).join(" ")} {...props} />
	)
}

function TableHead({ className, children, ...props }) {
	return (
		<th data-slot="table-head" className={["table__head", className].filter(Boolean).join(" ")} {...props}>
			<div className="table__head-content">
				{children}
			</div>
		</th>
	)
}

function TableCell({ className, ...props }) {
	return (
		<td data-slot="table-cell" className={["table__cell", className].filter(Boolean).join(" ")} {...props} />
	)
}

function TableCaption({ className, ...props }) {
	return (
		<caption data-slot="table-caption" className={["table__caption", className].filter(Boolean).join(" ")} {...props} />
	)
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, }