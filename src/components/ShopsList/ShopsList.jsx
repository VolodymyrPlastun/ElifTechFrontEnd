import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useDispatch } from 'react-redux';
import { selectShop } from 'redux/features/cart/cartSlice';

const ShopsList = () => {
  const dispatch = useDispatch();

  const handleShopSelect = e => {
    const buttonText = e.target.textContent;
    dispatch(selectShop(buttonText));
  };

  return (
    <Box>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Button sx={{width: "150px"}} variant="contained" onClick={handleShopSelect}>
                Pizza
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Button sx={{width: "150px"}} variant="contained" onClick={handleShopSelect}>
                Sushi
              </Button>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default ShopsList;
