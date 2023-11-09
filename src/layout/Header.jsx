import { Button, Container, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container maxW={'980px'} height={'70px'} mt={'25px'}>
        <HStack justifyContent={'space-between'}>
        <Heading color={'white'} >Film Harbor</Heading>
        <Link to={"/signup"}>
        <Button  color={'whiteAlpha.900'} bgColor={'red.600'}>Sign In</Button>
        </Link>
        </HStack>
    </Container>
  )
}

export default Header
