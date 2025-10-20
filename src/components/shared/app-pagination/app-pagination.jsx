import React from 'react'
import { PaginationNav, PaginationInfo } from './'
import { usePagination } from '../../../hooks'

export const AppPagination = ({className}) => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const totalPages = 30000
    const totalUsers = 60000
    const itemsPerPage = 20

    const { visiblePages } = usePagination(currentPage, totalPages)

    return (
        <div className='pagination-container'>
            <PaginationNav
                className={className}
                currentPage={currentPage}
                totalPages={totalPages}
                visiblePages={visiblePages}
                onPageChange={setCurrentPage}
            />
            <PaginationInfo
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalUsers={totalUsers}
            />
        </div>
    )
}

