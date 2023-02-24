import { UnlockIcon } from "@chakra-ui/icons";
import {
    Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

export default function Navbar() {
const toast = useToast()

const showToast = ()=>{
    toast({
        title: 'Logged out',
        description: 'successfully logged out',
        duration: 5000,
        isClosable: true,
        status: 'success',
        position: 'top',
        icon: <UnlockIcon/>

    })
}

  return (
    <Flex as="nav" p="10px" mb='50px' alignItems='center'>
      <Heading as="h1"> Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing='20px'>
        <Avatar src="/img/mario.png">
        <AvatarBadge boxSize='1.25em' bg='green.500' />

        </Avatar>
        <Text>mario@gmail.com.dev</Text>
        <Button colorScheme='purple' onClick={showToast}> Logout</Button>
      </HStack>
    </Flex>
  );
}
