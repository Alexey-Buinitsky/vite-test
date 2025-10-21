import React from 'react'
import { AppPaginationNav, AppPaginationInfo } from './'
import { usePagination } from '../../../hooks'

const TOTAL_PAGES = 30000
const TOTAL_USERS = 600000
const ITEMS_PER_PAGE = 20

export const AppPagination = ({className}) => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const { visiblePages } = usePagination(currentPage, TOTAL_PAGES)

    return (
        <div className={`pagination-container ${className}`}>
            <AppPaginationNav
                currentPage={currentPage}
                totalPages={TOTAL_PAGES}
                visiblePages={visiblePages}
                onPageChange={setCurrentPage}
            />
            <AppPaginationInfo
                currentPage={currentPage}
                itemsPerPage={ITEMS_PER_PAGE}
                totalUsers={TOTAL_USERS}
            />
        </div>
    )
}

