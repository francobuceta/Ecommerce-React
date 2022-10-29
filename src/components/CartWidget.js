import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
'& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
},
}));

const theme = createTheme({
    palette: {
        primary: {
            main: "#f2f2fc"
        },
        secondary: {
            main: "#b30c0b"
        }
    }
})

export default function CustomizedBadges() {
    return (
        <ThemeProvider theme={theme}> 
            <IconButton aria-label="cart" color="primary">
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon sx={{fontSize: "2.2rem"}}/>
                </StyledBadge>
            </IconButton>
        </ThemeProvider>
    );
}
