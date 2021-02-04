import React from 'react';
import Button from '../UIComponent/Button';
import {getPagesArray} from "../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <Button
                    onClick={() => changePage(p)}
                    key={p}
                    className='page'
                    active={page === p}
                >
                        {p}
                    </Button>
            )}
        </div>
    );
};

export default Pagination;
