function Separator({ className, orientation = "horizontal", ...props }) {

	const orientationClass = `separator--${orientation}`
	const combinedClassName = ["separator", orientationClass, className].filter(Boolean).join(" ")

	return (
		<div data-slot="separator-root" className={combinedClassName} {...props} />
	)
}

export { Separator }