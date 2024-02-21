import {
  Card,
  CardBody,
  OrderedList,
  ListItem,
  CardHeader,
  Button,
  HStack,
  Text,
  CardFooter,
  ButtonGroup,
  IconButton,
  Flex,
  Box,
} from '@chakra-ui/react';
import { sampleData } from '../constants/answer-sample';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { GrPowerReset } from 'react-icons/gr';

import { RxReset } from 'react-icons/rx';
import { SentenceInput } from './SentenceInput';
import { useEffect, useState } from 'react';
import { ISentence } from '../interfaces/sentence-with-input';
import { shuffleArray } from '../utils/shuffleArray';

interface IExerciseSentenceInput {
  sentenceList: ISentence[];
}

export const ExerciseSentenceInput = (props: IExerciseSentenceInput) => {
  const [exsData, setExsData] = useState<ISentence[]>(props.sentenceList);
  const [hintsList, setHintsList] = useState<string[]>(['']);
  const [isCheckActive, setIsCheckActive] = useState<boolean>(false);
  const [validAnswersList, setValidAnswersList] = useState<boolean[]>([]);
  const [score, setScore] = useState<string>('');

  function handleShuffleClick() {
    const shuffledArray = shuffleArray([...props.sentenceList]);
    setExsData(shuffledArray);
    console.log('New exsData:', exsData);
  }
  const handleValidityChange = (index: number, isValid: boolean) => {
    setValidAnswersList((prevValidityArray) => {
      const newValidityArray = [...prevValidityArray];
      newValidityArray[index] = isValid;
      return newValidityArray;
    });
  };
  useEffect(() => {
    const arr = shuffleArray([...props.sentenceList]);
    const hintArr = props.sentenceList.map((item) => {
      return item.hint;
    });
    const shuffledHints = shuffleArray([...hintArr]);
    setExsData(arr);
    setHintsList(shuffledHints);
  }, [props.sentenceList]);

  useEffect(() => {
    const qCounter = exsData.length;
    const correctAnswersCounter = validAnswersList.filter(
      (item) => item === true
    ).length;

    setScore(`${correctAnswersCounter} / ${qCounter}`);
  }, [validAnswersList]);

  return (
    <Card>
      <CardHeader p={'20px 20px 0'}>
        <Text color={'primary'} fontWeight={'bold'}>
          Fill the gaps with the correct word from the box
        </Text>
        <Box
          w={'100%'}
          mt={'8px'}
          display={'inline-flex'}
          border={'1px solid'}
          borderColor={'highlight'}
          borderRadius={'8px'}
          p={'8px'}
        >
          {hintsList.map((item, index) => {
            if (index === hintsList.length - 1) {
              return (
                <Text
                  key={`answer${index}`}
                  mr={'4px'}
                  color={'secondary.base'}
                >{`${item}${' '}`}</Text>
              );
            }
            return (
              <Text
                key={`answer${index}`}
                mr={'4px'}
                color={'secondary.base'}
              >{`${item},${' '}`}</Text>
            );
          })}
        </Box>
      </CardHeader>
      <CardBody display={'flex'} flexDirection={'column'} gap={'16px'}>
        <OrderedList spacing={'4px'}>
          {exsData.map((item, index) => {
            return (
              <ListItem key={`list-${index}`}>
                <SentenceInput
                  sentence={item}
                  key={`sentence-${index}`}
                  isCheckActive={isCheckActive}
                  onValidityChange={(valid) => {
                    handleValidityChange(index, valid);
                  }}
                />
              </ListItem>
            );
          })}
        </OrderedList>
      </CardBody>
      <CardFooter
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <ButtonGroup>
          <Button
            colorScheme={'highlight'}
            size={'sm'}
            variant={'outline'}
            onClick={() => setIsCheckActive(true)}
            rightIcon={<IoMdCheckmarkCircleOutline />}
          >
            Check Answers
          </Button>
          <Button
            rightIcon={<GrPowerReset />}
            colorScheme={'highlight'}
            size={'sm'}
            variant={'outline'}
            onClick={() => setIsCheckActive(false)}
            aria-label={''}
          >
            Reset Checking
          </Button>
        </ButtonGroup>
        <Text display={isCheckActive ? 'block' : 'none'}>Score: {score}</Text>
      </CardFooter>
    </Card>
  );
};
