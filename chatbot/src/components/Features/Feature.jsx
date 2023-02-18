import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import './Feature.css'
import { motion } from 'framer-motion';

const Feature = () => {
  const featuresData = [
    {name:'Integration',img:'https://cdn-icons-png.flaticon.com/512/1600/1600064.png'},
    {name:'Analytics',img:'https://cdn-icons-png.flaticon.com/512/2323/2323800.png'},
    {name:'Security',img:'https://cdn-icons-png.flaticon.com/512/4744/4744315.png'},
    {name:'Scalability',img:'https://cdn-icons-png.flaticon.com/512/1300/1300649.png'},
    {name:'NLP',img:'https://cdn-icons-png.flaticon.com/512/2143/2143311.png'},
    {name:'Contextual',img:'https://cdn-icons-png.flaticon.com/512/1600/1600064.png'}
  ]
  return (
    <Flex id='feature' flexDirection={{base:'column',md:'row'}} className='featuresPage' h={{base:'auto',md:'500px',lg:'600px'}} w='100%' p='2rem'  justifyContent={'space-between'} alignItems='center'>
  <Text fontSize={{base:'3xl',lg:'6xl'}} as='b' pl={{base:'2rem',lg:'6rem'}}>Power of <br/>Little AI</Text>
  <Box>
  <Grid templateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)'}}  gap='2rem' mt='1rem' mr={{base:'0rem',md:'1rem'}}>
    {
      featuresData.map((item,index)=>(
        
        <motion.div className='featureCards'
        whileInView={{opacity: [0, 1] }}
      transition={{duration:0.4,delay: (index/10),
        ease: "easeIn",}}>
          <Image src={item.img} boxSize='70px' m='auto' />
          <Text as='b'>{item.name}</Text>
        </motion.div>
      ))
    }
  </Grid>
  </Box>
</Flex>
  )
}

export default Feature