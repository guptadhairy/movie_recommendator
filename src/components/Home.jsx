import React from 'react'
import { Button, Container, HStack, Heading, VStack, Text, Input } from '@chakra-ui/react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    
    <VStack className='body'>
      <Container maxW={'980px'} height={'70px'} py={'20px'}>
        <HStack justifyContent={'space-between'}>
        <Heading color={'white'} >Film Harbor</Heading>
        <Link to={"/signup"}>
        <Button  color={'whiteAlpha.900'} bgColor={'red.600'}>Sign In</Button>
        </Link>
        </HStack>
    </Container>
    <Container marginTop={'180px'} maxW={'980px'} display={'flex'} flexDirection={'column'}>
      <Heading>The Biggest Block Buster movies and the Best Shows</Heading>
      <Heading mt={'15px'} display={'flex'} justifyContent={'center'} alignContent={'center'}>All you can find here.</Heading>
      <Text mt={'10px'} display={'flex'} justifyContent={'center'} alignContent={'center'}>Ready to find the content what you want? Enter your email address.</Text>
      <HStack mt={'20px'} justifyContent={'center'} alignItems={'center'}>
        <Input type='email' color={'red'} outlineColor={'white'} padding={'25px'} placeholder='Email address' width={'55%'} />
        <Button type='submit' fontSize={'1.3rem'} padding={'25px'} color={'whiteAlpha.900'} bgColor={'red.500'} width={"20%"}>Get Started {">"}</Button>
      </HStack>
    </Container>
    </VStack>
  )
}

export default Home
