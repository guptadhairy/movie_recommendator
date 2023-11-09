import {  HStack, Box, VStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import vdo1 from "../assets/n.m4v"
import vdo2 from "../assets/brain.mp4"
import vdo3 from "../assets/sartaj.m4v"
import kid from "../assets/kids.png"
import "../components/section1.css"
const Section1 = () => {
  return (
    <div>
    <div className='sec'>
        <HStack>
            <Box width={"60%"}>
                <VStack>
                    <Heading  >Create Your Account First. </Heading>
                    <Text padding={"20px"}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</Text>
                </VStack>
            </Box>
            <Box width={"40%"}>
                <video src={vdo1} muted autoPlay loop></video>
            </Box>
        </HStack>
    </div>
    <div>
        <HStack className='sec'>
        <Box width={"40%"} paddingLeft={"70px"} marginLeft={"10px"}>
                <video src={vdo2} muted autoPlay loop></video>
            </Box>
            <Box width={"60%"}>
                <VStack>
                    <Heading  >Answer Few Questions. </Heading>
                    <Text padding={"20px"}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</Text>
                </VStack>
            </Box>
        </HStack>
    </div>
    <div className='sec'>
        <HStack>
            <Box width={"60%"}>
                <VStack>
                    <Heading  >Get Personalized Recommendations. </Heading>
                    <Text padding={"20px"}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</Text>
                </VStack>
            </Box>
            <Box width={"40%"}>
                <video src={vdo3} muted autoPlay loop></video>
            </Box>
        </HStack>
    </div>
    <div>
        <HStack className='sec'>
        <Box width={"40%"} paddingLeft={"70px"} marginLeft={"10px"}>
                <img src={kid} alt='Kids' />
            </Box>
            <Box width={"60%"}>
                <VStack>
                    <Heading  >Specific Category for Kids. </Heading>
                    <Text padding={"30px"}>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</Text>
                </VStack>
            </Box>
        </HStack>
    </div>
    </div>
  )
}

export default Section1
