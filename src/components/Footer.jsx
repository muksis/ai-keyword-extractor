import { Box, Image, Text, Flex } from '@chakra-ui/react';
import logo from '../assets/openai.png';
const Footer = () => {
  return (
    <div>
      <Box marginTop={50}>
        <Flex justifyContent='center' alignItems='center'>
          <Image src={logo} marginRight={1} />
          <Text>Powered by Open AI</Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
