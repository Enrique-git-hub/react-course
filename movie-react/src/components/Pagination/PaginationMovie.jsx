import Pagination from "rc-pagination";
import React from "react";

import "./Pagination.scss"

export default function PaginationMovie(props) {
    const {currentPage, totalItems, onChangePage} = props

    return (
        <Pagination className="pagination" current={currentPage} total={totalItems} pageSize={20} onChange={onChangePage}/>
    )
}