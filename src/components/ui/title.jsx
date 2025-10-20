function Title({ className, variant = "h2", size, children, ...props }) {

	const VariantTag = variant
	const sizeClass = size ? `title--size-${size}` : ""
	const combinedClassName = ["title", `title--${variant}`, sizeClass, className].filter(Boolean).join(" ")

	return (
		<VariantTag data-slot="title" className={combinedClassName} {...props}>{children}</VariantTag>
	)
}

export { Title }