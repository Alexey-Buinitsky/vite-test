function Input({ className, type = "text", variant, children, position = "right", ...props }) {

	const variantClass = variant ? `input--${variant}` : ""
	const combinedClassName = ["input", variantClass, className].filter(Boolean).join(" ")

	return (
		<div className={`input__wrapper input__wrapper--${position}`}>
			<input data-slot="input" type={type} className={combinedClassName} {...props} />
			{children && <div className="input__content">{children}</div>}
		</div>
	)
}

export { Input }