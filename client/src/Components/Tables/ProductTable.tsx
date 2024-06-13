import React from 'react';
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import productsTablePropsInterface from '../../../interfaces/productsTable.interface';
import { Link } from 'react-router-dom';
const ProductTable = (props: productsTablePropsInterface) => {
  const { data } = props;
  return (
    <TableContainer width={"35rem"}>
      <Table variant={"striped"}>
        <Thead>
          <Tr>
            <Th>
              Name
            </Th>
            <Th>
              Price
            </Th>
            <Th>
              Quantity
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {

            data?.map((product:any) => {
              return (
                <Tr>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.quantity}</Td>
                  <Td color={"green"} className='hover:underline'><Link to={`/detail/${product.id}`}>details</Link></Td>
                </Tr>
              )
            })

          }
        </Tbody>
      </Table>

    </TableContainer>
  )
}

export default ProductTable