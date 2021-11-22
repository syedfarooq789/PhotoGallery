import { usePagination, DOTS } from '../hooks/usePagination';
import { ListPaginationProps } from '../interfaces/ListPaginationProps';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import {
    Link
} from 'react-router-dom';

const ListPagination = ({
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

    const isPrevIconButtonVisible = (e: React.MouseEvent<HTMLElement>) => {
        return currentPage === 1 ? e.preventDefault() : true;
    };

    const isNextIconButtonVisible = (e: React.MouseEvent<HTMLElement>) => {
        return currentPage === lastPage ? e.preventDefault() : true;
    };

    function isAvatarSelected(pageNumber: number) {
        return pageNumber === currentPage ? { bgcolor: blue[300] } : {
            bgcolor: 'transparent',
        }
    }

    const createPaginationNumberList = () => {
        return paginationRange!!.map((pageNumber, index) => {
            if (pageNumber === DOTS)
                return <ListItem key={index}> &#8230;</ListItem>


            // Render Page Pills
            return (
                <Avatar style={style.avatarMargins} sx={isAvatarSelected(pageNumber)} key={index} >
                    <Link style={style.Link} key={index} to={'/gallery/' + pageNumber}>{pageNumber}</Link>
                </Avatar >
            );
        })
    }

    const lastPage = paginationRange!![paginationRange!!.length - 1];

    return (
        <div style={style.paginationContainer}>
            <Link style={style.Link} to={'/gallery/' + String(currentPage - 1)} onClick={isPrevIconButtonVisible}>
                <ChevronLeftIcon />
            </Link>
            <List style={style.listStyle}>
                {createPaginationNumberList()}
            </List>
            <Link style={style.Link} to={'/gallery/' + String(currentPage + 1)} onClick={isNextIconButtonVisible}>
                < ChevronRightIcon />
            </Link>

        </div >

    );
};


export default ListPagination;


const style = {
    paginationContainer: {
        display: 'flex', flex: 1, justifyContent: 'center'
    },
    listStyle: {
        display: 'flex', padding: '10px'
    },
    avatarMargins: {
        margin: '10px'
    },
    Link: {
        color: 'black'
    }
}