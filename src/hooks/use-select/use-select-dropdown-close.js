import React from 'react'

export const useSelectDropdownClose = (isOpen, onClose, triggerRef, contentRef) => {
	React.useEffect(() => {
		const handleClickOutside = (event) => {
			const clickedOnTrigger = triggerRef.current?.contains(event.target)
			const clickedOnContent = contentRef.current?.contains(event.target)
			
			if (!clickedOnTrigger && !clickedOnContent) {
				onClose()
			}
		}

		const handleEscape = (event) => {
			if (event.key === 'Escape' && isOpen) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
			document.addEventListener('keydown', handleEscape)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('keydown', handleEscape)
		}
	}, [isOpen, onClose, triggerRef, contentRef])
}