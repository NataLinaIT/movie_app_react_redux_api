import React from 'react'
import style from './WishList.module.css'

 let WishList = (props) => {
    return (
        <div className={style.wish_list}>
          <p>Wish list: {props.wishList}</p>
        </div>
    )
}

export default WishList;