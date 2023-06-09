import { useEffect, useRef, useState } from "react"
import bigImage from "../assets/img/big-image.png"
import smallImage1 from "../assets/img/small-image-1.png"
import smallImage2 from "../assets/img/small-image-2.png"
import smallImage3 from "../assets/img/small-image-3.png"
import smallImage4 from "../assets/img/small-image-4.png"

export default function Main({ cart, setCart, setCartAmounth }) {

    const [mainImage, setMainImage] = useState(bigImage)

    function chosenImage(image) {
        setMainImage(image)

    }


    const [item, setItem] = useState(0)

    function AddToCart() {
        setCartAmounth(item)

    }



    function addItem() {
        setItem(prevState => prevState + 1);
    }

    function removeItem() {
        if (item > 0) {
            setItem(prevState => prevState - 1)

        }

    }

    return (
        < main >
            <section className="main--section--product">
                <div className="main--product--images">
                    <img src={mainImage} alt="big image" className="big-image" />
                    <div className="small-images">
                        <img onClick={() => chosenImage(smallImage1)} src={smallImage1} alt="small image" className={smallImage1 == mainImage ? "chosenImage" : ""} />
                        <img onClick={() => chosenImage(smallImage2)} src={smallImage2} alt="small image" className={smallImage2 == mainImage ? "chosenImage" : ""} />
                        <img onClick={() => chosenImage(smallImage3)} src={smallImage3} alt="small image" className={smallImage3 == mainImage ? "chosenImage" : ""} />
                        <img onClick={() => chosenImage(smallImage4)} src={smallImage4} alt="small image" className={smallImage4 == mainImage ? "chosenImage" : ""} />
                    </div>


                </div>
                <div className="main--product--info">
                    <h2 className="product--company">Sneaker Company</h2>
                    <h1 className="product--title">Fall Limited Edition<br /> Sneakers</h1>
                    <p className="product--description">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>

                    <div className="main--product--price">
                        <div className="product--price--info">
                            <p className="product--price" >$125.00</p>
                            <p className="product--old-price">50%</p>
                        </div>
                        <p className="product--price--discount">$250.00</p>
                    </div>

                    <div className="main--product--buttons">
                        <div>
                            <button onClick={removeItem}>-</button>
                            <p>{item}</p>
                            <button onClick={addItem}>+</button>
                        </div>
                        <button onClick={AddToCart} className="main--product--add--button">Add to cart</button>


                    </div>

                </div>

            </section>

        </main >
    )

}