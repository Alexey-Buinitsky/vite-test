function Label({ className, variant, htmlFor, ...props }) {

	const variantClass = variant ? `label--${variant}` : ""
	const combinedClassName = ["label", variantClass, className].filter(Boolean).join(" ")

	return (
		<label data-slot="label" htmlFor={htmlFor} className={combinedClassName} {...props} />
	)
}

export { Label }