function Button({ className, variant, children, ariaLabel, ...props }) {

	const variantClass = variant ? `button--${variant}` : ""
	const combinedClassName = ["button", variantClass, className].filter(Boolean).join(" ")

	return (
		<button data-slot="button" className={combinedClassName} {...props}>
			{children}
			{variant === "square" && ariaLabel && <span className="visually-hidden">{ariaLabel}</span>}
		</button>
	)
}

export { Button }