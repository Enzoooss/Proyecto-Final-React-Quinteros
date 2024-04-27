import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { useContext } from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export function CarWidget() {

  const {cart} = useContext( CartContext )
  

  return (
    <Link to={"/cart"}>
    <div className="carrito">
      <IconButton aria-label="cart">
      <StyledBadge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon sx={{ fontSize: 35 }} /> 
      </StyledBadge>
    </IconButton>
    </div>
    </Link>
  );
}
