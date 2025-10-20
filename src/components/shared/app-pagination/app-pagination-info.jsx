export const AppPaginationInfo = ({className, currentPage, itemsPerPage, totalUsers}) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalUsers)

    return (
        <div className={className}>
            <p className="pagination__info">
                Показано {startItem}-{endItem} из {totalUsers} пользователей
            </p>
        </div>
    );
}