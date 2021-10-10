import { Grid } from '@material-ui/core';
import { ProductListItem } from '.';

export const ProductList = ({ products }) => {
  return (
    <Grid spacing={7} component="ul" container>
        {products.map((product) => (
          <Grid key={product._id} component="li" item xs={12} sm={6} lg={4}>
            <ProductListItem product={product} />
          </Grid>
        ))}
    </Grid>
  );
};