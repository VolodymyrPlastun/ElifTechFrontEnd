import { Add, Remove } from '@mui/icons-material';
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, AddPizza, removeItem } from 'redux/features/cart/cartSlice';
import { Amount, Box, BtnBox, Img, PizzaCard } from './PizzaList.styled';
import { useLocation } from 'react-router-dom';

const PizzaList = ({ ItemsArr }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { pizzaArr, selectedItems } = useSelector(state => state.cart);
  // console.log(selectedItems);
  return (
    <div>
      <Grid container spacing={2}>
        {ItemsArr.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <PizzaCard style={{ height: '100%' }}>
              <Box>
                <CardActionArea>
                  <Img
                    component="img"
                    image={product.image}
                    title={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {product.description}
                    </Typography>
                    <Typography variant="h6" component="p">
                      {product.price} UAH
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  {location.pathname === '/cart' && <>
                  <Button 
                        onClick={() => dispatch(removeItem(product.id))}
                        variant="contained"
                        size="small"
                        color="primary">
                          Remove
                  </Button>
                  </>}
                  {!product.number ? (
                    <>
                      <Button
                        onClick={() => {
                          dispatch(AddPizza(product.id))
                        }}
                        variant="contained"
                        size="small"
                        color="primary"
                      >
                        Add to cart
                      </Button>
                    </>
                  ) : (
                    <BtnBox>
                      <Button onClick={() => dispatch(decrease(product.id))}>
                        <Remove />
                      </Button>
                      <Amount>
                      {pizzaArr.find(item => item.id === product.id)?.number}
                      </Amount>
                      <Button
                        onClick={() => {
                          dispatch(increase(product.id));
                        }}
                      >
                        <Add />
                      </Button>
                    </BtnBox>
                  )}
                </CardActions>
              </Box>
            </PizzaCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PizzaList;
