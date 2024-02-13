import { VStack } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ExerciseForm from '../../components/ExerciseForm';
import { ExerciseSelectInput } from '../../components/ExerciseSelectInput';
import { ExerciseSentenceInput } from '../../components/ExerciseSentenceInput';
import { ISentence } from '../../interfaces/sentence-with-input';
import { useCompleteChatMutation } from '../../store/gpt-api/gpt.api';
import { RootState } from '../../store/store';

export const MainPage = (): JSX.Element => {
  const [sendMessage, { isSuccess, isLoading, data }] = useCompleteChatMutation(
    { fixedCacheKey: 'shared-AI-answer' }
  );
  const [parsedData, setParsedData] = useState<ISentence[]>([
    {
      sentence: '',
      answer: '',
      hint: '',
      options: [],
    },
  ]);

  const formData = useSelector((state: RootState) => state.exerciseForm);

  function handleSendMessage() {
    sendMessage({
      content: `You are a tutor creating a vocabulary worksheet. The sentences will provide vocabulary practice.
    Compose sentences to practice the following words and phrases:
    exhausted, pleased, furious, stressed, upset, guilty, in a good mood, a bit down, pleasantly surprised, fed up
    The sentence should be appropriate for the intermediate B1 level.
    The learners are adults from 25 to 50 years old.
    The sentences should use casual language.
    In your reply write nothing else but the sentence.`,
    }).then((res) => {
      console.log(res);
    });
  }

  useEffect(() => {
    if (isSuccess && data) {
      setParsedData(JSON.parse(data.choices[0].message.content));
    }
  }, [isSuccess]);

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <VStack minHeight={'100vh'} m={'0 auto'} maxW={'800px'}>
      <ExerciseForm />
      {isSuccess && parsedData && formData.taskType === 'fillInGaps' ? (
        <ExerciseSentenceInput sentenceList={parsedData} />
      ) : null}
      {isSuccess && parsedData && formData.taskType === 'multipleChoice' ? (
        <ExerciseSelectInput sentenceList={parsedData} />
      ) : null}
      {/* <ExerciseSentenceInput sentenceList={sampleData2} />
      <ExerciseSelectInput sentenceList={sampleDataSelect}/> */}
    </VStack>
  );
};
