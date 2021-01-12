import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51I8fM3ASUcgsjqBbBwmam3AQPFQTsKAnFcz6WkoaXbcxvIODBxZlDhEqLKsBdjC4M1VIFixAaDu2Dhqqplt3EbT800abXE6zMn";

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Inc.'
            billingAddress
            shippingAddress
            image ='https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount ={priceForStripe}
            panelLabel ='Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
};

export default StripeCheckoutButton;