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
import { RxReset } from 'react-icons/rx';
import { SentenceInput } from './SentenceInput';
import { useEffect, useState } from 'react';
import { ISentence } from '../interfaces/sentence-with-input';
import { shuffleArray } from '../utils/shuffleArray';
import { SentenceSelectInput } from './SentenceSelectInput';

interface IExerciseSelectInput {
  sentenceList: ISentence[];
}

export const ExerciseSelectInput = (props: IExerciseSelectInput) => {
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

  useEffect(() => {
    console.log(exsData);
  }, []);

  return (
    <Card>
      <CardHeader ml={'auto'}>
        <Button
          colorScheme={'telegram'}
          size={'sm'}
          variant={'outline'}
          onClick={handleShuffleClick}
        >
          Shuffle Sentences
        </Button>
      </CardHeader>
      <CardBody display={'flex'} flexDirection={'column'} gap={'16px'}>
        {/* <HStack>
          {hintsList.map((item, index) => {
            return (
              <Text
                key={`answer${index}`}
                variant={'outline'}
                colorScheme={'telegram'}
                size={'sm'}
              >
                {item}
              </Text>
            );
          })}
        </HStack> */}
        <OrderedList spacing={'4px'}>
          {exsData.map((item, index) => {
            return (
              <ListItem key={`list-${index}`}>
                <SentenceSelectInput
                  sentence={item}
                  isCheckActive={isCheckActive}
                  onValidityChange={(valid) =>
                    handleValidityChange(index, valid)
                  }
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
            colorScheme={'telegram'}
            size={'sm'}
            variant={'outline'}
            onClick={() => setIsCheckActive(true)}
          >
            Check your answers
          </Button>
          <IconButton
            icon={<RxReset />}
            colorScheme={'telegram'}
            size={'sm'}
            variant={'outline'}
            onClick={() => setIsCheckActive(false)}
            aria-label={''}
          />
        </ButtonGroup>
        <Text display={isCheckActive ? 'block' : 'none'}>Score: {score}</Text>
      </CardFooter>
    </Card>
  );
};
