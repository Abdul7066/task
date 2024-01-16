import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ShoppingCard = () => {
  const [data, setData] = React.useState([]);

  const fetchDataAsync = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("API Failed....");
      }
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.log("ERROR=>", err);
    }
  };

  React.useEffect(() => {
    fetchDataAsync();
  }, []);

  return (
    <Grid container spacing={3}>
      {data.map((items, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 400}}
              image={items.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {items.title.slice(0, 20)}...
              </Typography>
              <span style={{ color: "gray", fontSize: "13px" }}>
                {items.category}
              </span>
              <Typography variant="body2" color="text.secondary">
                {items.description.slice(0, 88)}...
              </Typography>
              <span>
                Rating: {items.rating.rate} ⭐⭐⭐⭐⭐ <br />
                <span style={{ fontSize: "12px" }}>({items.rating.count} reviews)</span>
              </span>
            </CardContent>
            <CardActions>
              <Button size="small">Add to Cart</Button>
              <Button size="small">Buy Now</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ShoppingCard;
