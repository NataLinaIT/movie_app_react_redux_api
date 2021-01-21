import React, { Component } from 'react'
import classNames from "classnames"
import style from "./Pagination.module.css"

export default class Pagination extends Component {
  nextPage = () => {
    this.props.onChangePagination({
      page: this.props.page + 1,
      total_pages: this.props.total_pages
    });
  };

  prevPage = page => event => {
    this.props.onChangePagination({
      page: this.props.page - 1,
      total_pages: this.props.total_pages
    });
  };

  render() {
    const{ page, total_pages} = this.props;
    return (

      <nav className={style.pagination_wrapper}>
        <ul className="pagination mb-0 mr-3">
          <li
            className={classNames("page-item", {
              disabled: page === 1
            })}
          >
            <span className="page-link" onClick={this.prevPage(page)}>
               Назад
            </span>
          </li>
          <span>  {page} - {total_pages}</span>
          <li className="page-item">
            <span className="page-link" onClick={this.nextPage}>
              Вперед
            </span>
          </li>
        </ul>
       
      </nav>
    )
  }
}
