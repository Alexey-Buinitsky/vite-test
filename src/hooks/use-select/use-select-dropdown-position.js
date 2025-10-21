import React from 'react'

const CONTENT_HEIGHT = 116
const Z_INDEX = 1000

export const useSelectDropdownPosition = (isOpen, triggerRef) => {
	const [contentStyle, setContentStyle] = React.useState({})

	React.useEffect(() => {
		if (!isOpen || !triggerRef.current) {
			setContentStyle({})
			return
		}

		const calculatePosition = () => {
			const rect = triggerRef.current.getBoundingClientRect()
			const viewportHeight = window.innerHeight

			const spaceBelow = viewportHeight - rect.bottom

			if (spaceBelow < CONTENT_HEIGHT && rect.top > CONTENT_HEIGHT) {
				setContentStyle({
					position: 'fixed',
					bottom: `${viewportHeight - rect.top}px`,
					left: `${rect.left}px`,
					zIndex: Z_INDEX
				})
			} else {
				setContentStyle({
					position: 'fixed',
					top: `${rect.bottom}px`,
					left: `${rect.left}px`,
					zIndex: Z_INDEX
				})
			}
		}

		calculatePosition()

		window.addEventListener('scroll', calculatePosition)
		window.addEventListener('resize', calculatePosition)

		return () => {
			window.removeEventListener('scroll', calculatePosition)
			window.removeEventListener('resize', calculatePosition)
		}
	}, [isOpen, triggerRef])

	return contentStyle
}