import React, { useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ProductTable from '../../Tables/ProductTable';
import productData from '../../../../EndPoints/Products'

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  // consume Api from backend using Axios 
  useEffect(() => {
    productData.getAll()
    .then((res) => {
       console.log(res)
      setProducts(res.data)})
    .catch(err => console.log(err));
  }, [])


  return (
    <Box className='flex flex-col gap-[4rem] items-center'>
      <Heading textAlign={'center'} className='pt-[1.5rem] '> All Products </Heading>
      <ProductTable data={products}/>
    </Box>
  )
}

export default ProductPage