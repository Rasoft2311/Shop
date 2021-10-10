import { makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterableProductsSection } from '../components/FilterableProductsSection';
import { ErrorMessage } from '../components/ErrorMessage';
import { Spinner } from '../components/Spinner';
import { getAllProducts } from '../store/Product/thunks';
import { selectAllProducts, selectIsProductLoading, selectProductsError } from '../store/Product/selectors';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(5),
    color: theme.palette.secondary.main
  }
}));

export const ProductListPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const isProductsLoading = useSelector(selectIsProductLoading);
  const products = useSelector(selectAllProducts);
  const error = useSelector(selectProductsError);
  return (
    <>
      <Typography className={classes.title} variant="srOnly" component="h1">Our products</Typography>
      {
      isProductsLoading ?
      <Spinner color='secondary' width='40px' height='40px'/>
      :
      error ?
      <ErrorMessage message={error} />
      :
      <FilterableProductsSection products={products}/>
      }
    </>
  );
};