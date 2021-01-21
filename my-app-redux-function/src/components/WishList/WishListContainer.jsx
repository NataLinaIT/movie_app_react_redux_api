import React from 'react'
import WishList from './WishList'
import { connect } from "react-redux";

let  WishListContainer = (props) => {
    return (
      <WishList wishList={props.wishList.length}/>
    )
}

let mapStapeToProps = (state) => {
  return {
    wishList: state.movieFilters.wishList,
  };
};

export default connect(mapStapeToProps, {})(WishListContainer);
