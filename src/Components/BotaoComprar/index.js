import React from 'react';
import { Redirect } from 'react-router-dom';

const BotaoComprar = () => {
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  if (shouldRedirect) return <Redirect to="/Frontend_Store_project/checkout" />;
  return (
    <button
      data-testid="checkout-products"
      type="button"
      onClick={ () => setShouldRedirect(true) }
    >
      COMPRAR

    </button>
  );
};

export default BotaoComprar;
