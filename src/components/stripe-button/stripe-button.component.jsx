import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Oz7LtqU47pU9UxqOYAZ9uCUJ00HDHkxMUX';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='STYLO'
      billingAddress
      shippingAddress
      image='https://#'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;