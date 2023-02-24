import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  const tasks = useLoaderData()
  return (
    <SimpleGrid spacing={10} minChildWidth='300px' >
     {tasks && tasks.map(task =>(
      <Card key={task.id} borderTop='8px solid purple' bg='white'>
        <CardHeader>
            <Flex gap={2}>
            <Avatar src={task.img}/>

              <Box>
                <Heading as='h3' size= 'sm'>{task.title}</Heading>
                <Text> by {task.author}</Text>
              </Box>
            </Flex>
        </CardHeader>
        <CardBody>
          <Text>{task.description}</Text>
        </CardBody>
        <Divider borderColor='gray.200'/>

        <CardFooter>
        <HStack>
          <Button variant='ghost' rightIcon={<ViewIcon/>}>Watch</Button>
          <Button variant='ghost' rightIcon={<EditIcon/>}>Comment</Button>
        </HStack>
        </CardFooter>
      </Card>
     ))}

    </SimpleGrid>
  )
}

export const tasksloader = async()=>{
  const res = await fetch('  http://localhost:7000/tasks')
  return res.json()
}