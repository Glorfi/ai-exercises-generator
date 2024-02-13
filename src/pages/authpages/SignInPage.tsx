import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  FormControl,
  HStack,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { APP_PATHS } from '../../constants/AppPaths';
import { useState } from 'react';

interface ISignInForm {
  email: string;
  password: string;
}

export const SignInPage = (): JSX.Element => {
  const [formValues, setFormValues] = useState<ISignInForm>({
    email: '',
    password: '',
  });

  function handleInputChange(e: any) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  return (
    <Stack minH={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <Card
        w={'100%'}
        maxW={['unset', '352px']}
        bgColor={'background'}
        position={'relative'}
      >
        <Image
          src="src\assets\signin-elipse.svg"
          maxW={'233px'}
          zIndex={'0'}
          position={'absolute'}
        />
        <CardBody position={'relative'}>
          <Text
            color={'primary'}
            fontSize={'36px'}
            fontWeight={900}
            maxW={'228px'}
            lineHeight={'43px'}
          >
            Welcome Back
          </Text>
          <Box
            as="form"
            mt={'48px'}
            display={'flex'}
            flexDir={'column'}
            gap={'20px'}
          >
            <FormControl>
              <Input
                minH={'60px'}
                type="email"
                name="email"
                fontSize={'18px'}
                placeholder="Email"
                colorScheme="secondary"
                borderRadius={'20px'}
                _placeholder={{ color: 'secondary.base' }}
                bgColor={'gray.200'}
                color={'primary'}
              />
            </FormControl>
            <FormControl>
              <Input
                minH={'60px'}
                type="password"
                name="password"
                fontSize={'18px'}
                placeholder="Password"
                colorScheme="secondary"
                borderRadius={'20px'}
                _placeholder={{ color: 'secondary.base' }}
                bgColor={'gray.200'}
              />
            </FormControl>
          </Box>
          <HStack mt={'20px'} justifyContent={'space-between'}>
            <Text
              color="secondary.base"
              fontSize={'32px'}
              fontWeight={900}
              lineHeight={'43px'}
            >
              Sign in
            </Text>
            <IconButton
              isRound={true}
              aria-label={''}
              type="submit"
              bgColor={'secondary.base'}
              colorScheme="secondary"
              icon={<ArrowForwardIcon w={'24px'} h={'30px'} />}
              minW={'64px'}
              minH={'64px'}
            />
          </HStack>
          <Box mt={'125px'}>
            <Text fontSize={'20px'} color={'highlight'}>
              Don't have an account?
            </Text>
            <ChakraLink
              as={ReactRouterLink}
              to={APP_PATHS.SIGN_UP}
              fontSize={'24px'}
              fontWeight={900}
              color={'secondary.base'}
              // _hover={{ textDecoration: 'none' }}
            >
              Sign up
            </ChakraLink>
          </Box>
        </CardBody>
      </Card>
    </Stack>
  );
};
