import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import './App.css';
export default function App() {
  return (
    <Box id='app'>
      <Flex w='320px'>
        <Text>さねら</Text>
        <Spacer />
        <Text color='gray'>
          <a href='https://blog.neara.cyou/'>Blog</a>
        </Text>
      </Flex>
      <Box mt='3px'>
        <Image src='/image.jpeg' class='animated rubberBand' />
      </Box>
      <Box w='320px' mt='3px'>
        <Text>Whoami</Text>

        <Text letterSpacing='0.14em' fontWeight='extrabold'>
          'Rust, JavaScript/TypeScript' = 🤔
          <br />
          From: 🇯🇵
        </Text>
      </Box>
    </Box>
  );
}
