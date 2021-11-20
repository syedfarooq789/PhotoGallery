import { usePagination, DOTS } from '../hooks/usePagination';
import { ListPaginationProps } from '../interfaces/ListPaginationProps';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';

const ListPagination = ({
    onPageChange,
    totalCount,
    siblingCount,
    currentPage,
    pageSize,
}: ListPaginationProps) => {

    //using use pagination hook to fetch pagination array
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange!!.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const isPrevIconButtonVisible = (currentPage: number) => {
        return currentPage === 1 ? true : false
    };

    const isNextIconButtonVisible = (currentPage: number) => {
        return currentPage === lastPage ? true : false
    };


    const createPaginationNumberList = () => {
        return paginationRange!!.map((pageNumber, index) => {
            if (pageNumber === DOTS)
                return <ListItem key={index}> &#8230;</ListItem>


            // Render Page Pills
            return (
                <ListItem selected={pageNumber === currentPage ? true : false} key={index} onClick={() => onPageChange(pageNumber)}> {pageNumber}</ListItem>

            );
        })
    }


    const lastPage = paginationRange!![paginationRange!!.length - 1];

    return (
        <div style={style.paginationContainer}>

            <IconButton disabled={isPrevIconButtonVisible(currentPage)}
                color="secondary" onClick={onPrevious}>
                <ChevronLeftIcon />
            </IconButton>
            <List style={style.listStyle}>
                {createPaginationNumberList()}
            </List>
            <IconButton disabled={isNextIconButtonVisible(currentPage)} color="secondary" onClick={onNext}>
                <ChevronRightIcon />
            </IconButton>
        </div>

    );
};


export default ListPagination;


const style = {
    paginationContainer: {
        display: 'flex', flex: 1, justifyContent: 'center'
    },
    listStyle: {
        display: 'flex', padding: '10px'
    }
}