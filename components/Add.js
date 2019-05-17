import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/actions"

const Add = props => {

  let currentTitle;
  let currentPrice;

  return (
    <div>
      Add
    <br />
      <input placeholder="title" ref={t => currentTitle = t}></input>
      <br />
      <input placeholder="price" ref={p => currentPrice = p}></input>
      <br />
      <button onClick={() => {
        console.log(currentTitle.value);
        console.log(currentPrice.value);
        let priceCheck = parseFloat(currentPrice.value);
        if (!isNaN(priceCheck)) {
          console.log(priceCheck);
          // props.dispatch(
          //   {
          //     type: "ADD",
          //     title: currentTitle.value,
          //     price: currentPrice.value
          //   })
          props.dispatch(addItem(currentTitle.value, priceCheck))
          currentTitle.value = "";
          currentPrice.value = "";

        } else {
          console.log("Price is invalid")
        }
      }}> Add </button>
    </div>
  )
}

export default connect()(Add);