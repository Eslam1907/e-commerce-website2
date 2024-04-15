import React from "react"
import Home from "../features/MainPage/Home"
import FlashDeals from "../features/flashDeals/FlashDeals"
import TopCate from "../features/top/TopCate"
import NewArrivals from "../features/newarrivals/NewArrivals"
import Discount from "../features/discount/Discount"
import Shop from "../features/shops/Shop"
import Annocument from "../features/annocument/Annocument"
import Wrapper from "../features/wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages
