import React from 'react'
import "./signup.css"
import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react'
const Signup = () => {
  return (
    <Box bgColor={'blackAlpha.900'} >
    <div className='sign'>
      <VStack height={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Heading color={'blackAlpha.900'}>Create Account</Heading>
        <Input required mt={'10px'} type='text' _placeholder={{ opacity: 1, color: 'black' }} fontWeight={'700'} fontSize={'1.2rem'} outlineColor={'blackAlpha.800'} color={'black'} width={'40%'} className='input' placeholder='Enter your name' />
        <Input required mt={'10px'} type='email' _placeholder={{ opacity: 1, color: 'black' }} fontWeight={'700'} fontSize={'1.2rem'} outlineColor={'blackAlpha.800'} color={'black'} width={'40%'} className='input' placeholder='Enter your email' />
        <Input required mt={'10px'} type='password' _placeholder={{ opacity: 1, color: 'black' }} fontWeight={'700'} fontSize={'1.2rem'} outlineColor={'blackAlpha.800'} color={'black'} width={'40%'} className='input' placeholder='Enter your password' />
        <Button type='submit' width={'20%'} bgColor={'red.600'}>Sign In</Button>
      </VStack>
    </div>
    </Box>
  )
}

export default Signup
