import React from 'react'

export const useSortTable = () => {
	const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'asc' })

	const handleSort = (key) => {
		let direction = 'asc'

		if (sortConfig.key === key) {
			if (sortConfig.direction === 'asc') {
				direction = 'desc'
			} else if (sortConfig.direction === 'desc') {
				setSortConfig({ key: null, direction: 'asc' })
				return
			}
		}

		setSortConfig({ key, direction })
	}

	const sortedUsers = (users, positionValues = {}) => {
		if (!sortConfig.key) return users

		return [...users].sort((a, b) => {

			let aValue, bValue

			if (sortConfig.key === 'position') {
				aValue = positionValues[a.id] || a.position
				bValue = positionValues[b.id] || b.position
			} else {
				aValue = a[sortConfig.key]
				bValue = b[sortConfig.key]
			}

			if (aValue < bValue) {
				return sortConfig.direction === 'asc' ? -1 : 1
			}
			if (aValue > bValue) {
				return sortConfig.direction === 'asc' ? 1 : -1
			}
			return 0
		})
	}

	return { sortConfig, handleSort, sortedUsers }
}