import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51I8fM3ASUcgsjqBbBwmam3AQPFQTsKAnFcz6WkoaXbcxvIODBxZlDhEqLKsBdjC4M1VIFixAaDu2Dhqqplt3EbT800abXE6zMn";

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data:{
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('payment successful')
        }).catch(error => {
            console.log('Payment error:', JSON.parse(error));
            alert(
                'There was an issue with your credit card, please use the provided credit card.'
            );
        })
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