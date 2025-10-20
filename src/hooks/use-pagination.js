export const usePagination = (currentPage, totalPages = 30000) => {
    const getVisiblePages = () => {
        const pages = []
        
        pages.push(1)
        
        if (currentPage <= 4) {
            for (let i = 2; i <= 5; i++) {
                pages.push(i)
            }
            pages.push('...')
            pages.push(totalPages)
        } else if (currentPage >= totalPages - 3) {
            pages.push('...')
            for (let i = totalPages - 4; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            pages.push('...')
            pages.push(currentPage - 1)
            pages.push(currentPage)
            pages.push(currentPage + 1)
            pages.push('...')
            pages.push(totalPages)
        }
        
        return pages
    }

    return {
        visiblePages: getVisiblePages()
    }
}