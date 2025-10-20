export const Button = ({ className, variant, ...props }) => {

	const variantClass = variant ? `button--${variant}` : ""
	const combinedClassName = ["button", variantClass, className].filter(Boolean).join(" ")

	return (
		<button data-slot="button" className={combinedClassName} {...props} />
	)
}