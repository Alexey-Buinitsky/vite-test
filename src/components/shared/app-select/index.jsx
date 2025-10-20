import React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../ui"
import { useSelectDropdown, useSelectDropdownPosition, useSelectDropdownClose } from "./../../../hooks"

export const AppSelect = ({ className, value, onValueChange, options = [], placeholder = "Выберите должность", disabled = false }) => {
	
	const { isOpen, close, toggle } = useSelectDropdown(false)
	const triggerRef = React.useRef(null)
	const contentRef = React.useRef(null)

	const contentStyle = useSelectDropdownPosition(isOpen, triggerRef)
	useSelectDropdownClose(isOpen, close, triggerRef, contentRef)

	const selectedOption = options.find(opt => opt.value === value)

	const handleOptionSelect = (optionValue) => {
		onValueChange(optionValue)
		close()
	}

	const handleTriggerClick = () => {
		if (!disabled) {
			toggle()
		}
	}

	return (
		<Select className={className}>
			<SelectTrigger
				ref={triggerRef}
				isOpen={isOpen}
				onClick={handleTriggerClick}
				disabled={disabled}
			>
				<SelectValue placeholder={placeholder}>
					{selectedOption?.label}
				</SelectValue>
			</SelectTrigger>
			{isOpen && (
				<SelectContent ref={contentRef} style={contentStyle}>
					<SelectGroup>
						{options.map((option) => (
							<SelectItem
								key={option.value}
								isSelected={value === option.value}
								onClick={() => handleOptionSelect(option.value)}
							>
								{option.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			)}
		</Select>
	)
}