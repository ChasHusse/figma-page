import { useEffect, useRef, useState } from "react"
import headerCart from "../assets/img/Shape.svg"
import headerProfile from "../assets/img/header--profile.png"
import bigImage from "../assets/img/big-image.png"
import trashImage from "../assets/img/trash.png"


export default function Header({ cartAmounth }) {

    let price = 125
    let totalPrice = price * cartAmounth

    let cartItems =
        <div>
            <div className="cart-div">
                <img className="cart-image" src={bigImage} alt="shoe image" />
                <div className="cart-item">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>{`$125.00${price}.00 x ${cartAmounth}     `}<span className="totalprice">${totalPrice}</span></p>
                </div>
                <img className="trash-image" src={trashImage} alt="trash image" />
            </div>
            <button className="checkout-button">Checkout</button>
        </div>


    console.log(cartItems)



    const [showCart, SetshowCart] = useState(false)
    const [cart, setCart] = useState({
        img: bigImage,
        title: "Fall Limited Edition Sneakers",
        price: 0,
        amounth: 0,
        totalPrice: 0
    })

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)

    }, [])

    const refOne = useRef(null)

    function handleClickOutside(e) {
        if (!refOne.current.contains(e.target)) {
            SetshowCart(false)

        } else {
            SetshowCart(true)

        }
    }



    return (
        <>
            <header>
                <a id="header--logoLink" href="#">sneakers</a>
                <nav>
                    <ul>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <section id="header--section--cartProfile">
                    <a href="#">
                        <img ref={refOne} id="header--cartProfile--cartImage" src={headerCart} alt="cart" />
                    </a>
                    <a href="#">
                        <img id="header--cartProfile--profileImage" src={headerProfile} alt="profile" />
                    </a>
                </section>
                {showCart &&
                    <div className="cart">
                        <h4>Cart</h4>
                        <div className="cart-items">
                            {cartAmounth > 0 ? cartItems : <p>Your cart is empty.</p>}
                        </div>
                    </div>}
            </header >
        </>
    )

}