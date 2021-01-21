import React, { Component } from 'react'
import style from './WishList.module.css'

export default class WishList extends Component {
  render() {
    const {wishList} = this.props;
    
    return (
        <div className={style.wish_list}>
          <p>Wish list: {wishList}</p>
        </div>
    )
  }
}
