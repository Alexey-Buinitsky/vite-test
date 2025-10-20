import { Pagination, PaginationControls, PaginationButton, PaginationArrow, PaginationEllipsis } from '../../ui'

export const PaginationNav = ({className, currentPage, totalPages, visiblePages, onPageChange}) => {
    return (
        <Pagination className={className}>
            <PaginationControls>
                <PaginationArrow 
                    direction="left"
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                />

                {visiblePages.map((page, i) => {
                    if (page === '...') {
                        return (
                            <PaginationEllipsis key={`ellipsis-${i}`} />
                        )
                    }

                    return (
                        <PaginationButton
                            key={page}
                            isActive={page === currentPage}
                            isLong={page > 9999}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </PaginationButton>
                    )
                })}

                <PaginationArrow 
                    direction="right"
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                />
            </PaginationControls>
        </Pagination>
    )
}