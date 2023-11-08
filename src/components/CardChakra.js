import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, ButtonGroup, Button, Divider } from '@chakra-ui/react';
import resumeImg from './resume-190916.jpg'

export default function CardChakra() {
  return (
    <div>
      <Card maxW='sm' style={{height: "450px", width: "300px"}}>
  <CardBody>
    <Image
      src={resumeImg}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Resume</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup mt='8' spacing='2'>
      <Button variant='solid' colorScheme='purple'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    </div>
  )
}
