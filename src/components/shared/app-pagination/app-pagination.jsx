import React from 'react'
import { AppPaginationNav, AppPaginationInfo } from './'
import { usePagination } from '../../../hooks'

const totalPages = 30000
const totalUsers = 60000
const itemsPerPage = 20

export const AppPagination = ({className}) => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const { visiblePages } = usePagination(currentPage, totalPages)

    return (
        <div className={`pagination-container ${className}`}>
            <AppPaginationNav
                currentPage={currentPage}
                totalPages={totalPages}
                visiblePages={visiblePages}
                onPageChange={setCurrentPage}
            />
            <AppPaginationInfo
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalUsers={totalUsers}
            />
        </div>
    )
}

