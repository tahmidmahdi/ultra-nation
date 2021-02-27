import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    let totalPopulation = cart.reduce((sum, country)=> sum + country.population ,0);
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    return (
        <div>
            <h2>This is cart length: {cart.length}</h2>
            <p>total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;