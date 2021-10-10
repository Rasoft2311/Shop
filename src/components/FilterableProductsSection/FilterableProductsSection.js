import { makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { useRouter } from '../../hooks/useRouter';
import { selectfilteredProductsByCategory } from '../../store/Product/selectors';
import { ProductList } from '../Product';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(5),
    fontSize: '2.75rem',
    color: theme.palette.secondary.main
  },
  notFound: {
    color: theme.palette.secondary.main
  }
}));

export const FilterableProductsSection = ({products}) => {
  const classes = useStyles();
  const { query } = useRouter();
  const filteredProductsByCategory = useSelector(state => selectfilteredProductsByCategory(state, query.category));
  const title = query.category ? `Category - ${capitalizeFirstLetter(query.category)}` : 'All products';
  return (
    <section>
      <Typography className={classes.title} component="h2">{title}</Typography>
      {
      filteredProductsByCategory.length ?
      <ProductList products={filteredProductsByCategory}/>
      :
      <Typography className={classes.notFound} variant="h2" component="p">Products not found</Typography>
      }
    </section>
  );
};