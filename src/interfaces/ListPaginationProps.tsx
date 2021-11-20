
export interface ListPaginationProps {
    onPageChange: (currentPage: number) => void,
    totalCount: number,
    siblingCount: number,
    currentPage: number,
    pageSize: number
}