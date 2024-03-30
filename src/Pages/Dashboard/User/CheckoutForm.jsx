import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

import UseCart from '../../../Hooks/UseCart';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';


const CheckoutForm = () => {

  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const [cart] = UseCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    useEffect(()=> {
      axiosSecure.post('/create-payment-intent', {price : totalPrice})
      .then(res=> {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
    },[axiosSecure, totalPrice])
  
  

    const handleSubmit = async(event)=> {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

          const card = elements.getElement(CardElement);
          if(card === null){
            return
          }

           // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.message);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }
    }
    return (
        <form onSubmit={handleSubmit}>
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '24px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary mt-10' type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className='text-red-600'>
        {error}
      </p>
        </form>
    );
};

export default CheckoutForm;