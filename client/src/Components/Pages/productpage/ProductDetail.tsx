import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import productsData from '../../../../EndPoints/Products'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [product, setProduct]: any = useState("");
    const productId = useParams();
    console.log(productId);
    useEffect(() => {
        productsData.getById(productId.id)
            .then(res => {
                console.log(res)
                setProduct(res.data)
            }).catch(err => console.log(err));

    }, [])
    return (
        <Box className="border border-white h-screen pt-[6rem] pl-[4rem] flex">
            {/* <Box className="border border-white 
        self-baseline flex flex-col gap-[1rem] p-[0.7rem] rounded-[0.5rem]">
                <Heading>{product?.name}</Heading>
                <Text>Price: {product?.price}</Text>
                <Text>Quantity: {product?.quantity} Loaves in Stock </Text>
                <Divider orientation='horizontal' />
                <Text>Description : {product?.description}</Text>
            </Box> */}


            <Card maxW='xs' className='self-baseline'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{product?.name}</Heading>
                        <Text>
                            {product?.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            XAF{product?.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Box>
    )
}

export default ProductDetail