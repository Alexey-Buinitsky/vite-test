import React from "react"

function Select({ className, ...props }) {
	return (
		<div data-slot="select" className={['select', className].filter(Boolean).join(' ')} {...props} />
	)
}

export const SelectTrigger = React.forwardRef(({ className, isOpen = false, children, ...props }, ref) => {
	return (
		<button ref={ref} data-slot="select-trigger" data-open={isOpen} className={['select__trigger', className].filter(Boolean).join(' ')} {...props}>
			{children}
			<svg className="select__chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" >
				<path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	)
})

SelectTrigger.displayName = 'SelectTrigger'

function SelectValue({ className, children, placeholder, ...props }) {
	const displayValue = children || placeholder

	return (
		<span data-slot="select-value" className={['select__value', className].filter(Boolean).join(' ')} {...props}>
			{displayValue}
		</span>
	)
}

export const SelectContent = React.forwardRef(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} data-slot="select-content" className={['select__content', className].filter(Boolean).join(' ')} 	{...props}>
			<div className="select__viewport">
				{children}
			</div>
		</div>
	)
})

SelectContent.displayName = 'SelectContent'


function SelectGroup({ className, children, ...props }) {
	return (
		<div data-slot="select-group" className={['select__group', className].filter(Boolean).join(' ')} {...props}>
			{children}
		</div>
	)
}

function SelectItem({ className, isSelected = false, children, ...props }) {
	return (
		<button data-slot="select-item" data-selected={isSelected} className={['select__item', className].filter(Boolean).join(' ')} {...props}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="select__check">
				<path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			<span className="select__item-label">
				{children}
			</span>
		</button>
	)
}

export { Select, SelectValue, SelectGroup, SelectItem }