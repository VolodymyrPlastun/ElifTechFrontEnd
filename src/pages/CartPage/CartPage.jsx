import { Box, Button, Typography } from '@mui/material';
import ShopDrawer from 'components/ShopDrawer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { calculateTotal } from 'redux/features/cart/cartSlice';
import { createOrder } from '../../api';
import {
  Container,
  PriceText,
  PriceTotal,
  TextBox,
  TotalBox,
} from './CartPage.styled';

const CartPage = () => {
  const dispatch = useDispatch();

  const { selectedItems, total, formData } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, selectedItems]);
  return (
    <Container>
      {selectedItems.length > 0 ? (
        <>
          <ShopDrawer />
          <TotalBox>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <PriceText variant="h4">
                Total price: <PriceTotal>{total} UAH</PriceTotal>
              </PriceText>
              <Button
                variant="contained"
                color="primary"
                onClick={() => createOrder(formData, selectedItems)}
              >
                Make an order
              </Button>
            </Box>
          </TotalBox>
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
