import React from "react";
import classNames from "classnames";
import style from "./Pagination.module.css";

let Pagination = (props) => {
    return (
      <nav className={style.pagination_wrapper}>
        <ul className="pagination mb-0 mr-3">

          <li className={classNames("page-item", { disabled: props.page === 1,})}>
            <span className="page-link" onClick={props.prevPage}>Prev</span>
          </li>

          <span> {props.page} - {props.total_pages}</span>

          <li className={classNames("page-item", {disabled: props.total_pages <= props.page,})}>
            <span className="page-link" onClick={props.nextPage}>Next</span>
          </li>
          
        </ul>
      </nav>
    );
}

export default Pagination;