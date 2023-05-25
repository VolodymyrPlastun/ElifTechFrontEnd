import { Box, Button, Typography } from '@mui/material';
import PizzaList from 'components/PizzaList/PizzaList';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, calculateTotal } from 'redux/features/cart/cartSlice';
import { Container, PriceText, PriceTotal, TextBox } from './CartPage.styled';
import { useEffect } from 'react';

const CartPage = () => {
  const dispatch = useDispatch();

  const { selectedItems, amount, total, pizzaArr } = useSelector(state => state.cart);

useEffect(() => {
  dispatch(calculateTotal())
}, [dispatch, pizzaArr, amount])
  return (
    <Container>
      {amount !== 0 ? (
        <>
          <PizzaList ItemsArr={selectedItems} />
          <div>
            <PriceText variant="h4">
              Total price: <PriceTotal>{total} UAH</PriceTotal>
            </PriceText>
          </div>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(clearCart())}
            >
              Make an order
            </Button>
          </Box>
        </>
      ) : (
        <TextBox>
          <Typography style={{ fontSize: '30px' }}>
            Choose pizza <Link to="/">here</Link>
          </Typography>
        </TextBox>
      )}
    </Container>
  );
};

export default CartPage;
