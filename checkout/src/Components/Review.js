import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
  Image: <img src="https://ih1.redbubble.net/image.3532346475.2830/st,small,507x507-pad,600x600,f8f8f8.jpg"width="130px" height="130px"/>,
    name: "Quandale Dinge",
    desc: 'No idea',
    price: '$9.99',
  },
  {
    Image: <img src="https://ichef.bbci.co.uk/images/ic/336xn/p0578ckr.jpg"width="130px" height="150px"/>, 
    name: 'Cyberman',
    desc: 'Scary machine man',
    price: '$3.45',
  },
  {
    Image: <img src="https://i5.walmartimages.com/asr/61fe84e2-fd47-406f-9407-6728e19aa844_1.103c46e3c9ad01a957e22f233c639610.jpeg"width="130px" height="160px"/>, 
    name: 'TARDIS Box',
    desc: 'Toy of police box',
    price: '$6.51',
  },
  {
    Image: <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1eeaacc0-e07c-4024-a5f7-57f2fd23e8a2/air-max-270-g-golf-shoe-gTpCFg.png"width="130px" height="160px"/>, 
    name: 'Nike Shoe',
    desc: 'Running Shoe',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Not Free' },
];

const addresses = ['5 Walt Drive', 'Hawkins', 'Indiana', '5221', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Discover' },
  { name: 'Card holder', detail: 'Texas Lexus' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-4821' },
  { name: 'Expiry date', detail: '04/2026' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
           {product.Image} 
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}