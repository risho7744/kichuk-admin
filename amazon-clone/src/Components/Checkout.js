import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProducts'
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left" >
                <img 
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img15/home/LA/exchange_offers._V278112460_.jpg"
                    alt="Ad__banner"
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to Basket"
                            next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* List out all of the Checkout Products */}
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                )}
            </div>

            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}               
        </div>
    )
}

export default Checkout
