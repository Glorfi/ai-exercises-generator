import { Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ISentence } from '../interfaces/sentence-with-input';

interface ISentenceInputProps {
  sentence: ISentence;
  isCheckActive: boolean;
  onValidityChange: (isValid: boolean) => void;
}

export const SentenceInput = (props: ISentenceInputProps) => {
  const { isCheckActive, onValidityChange } = props;
  const { sentence, answer } = props.sentence;
  const [value, setValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const parts = sentence.split(answer);

  function handleValidity() {
    // if (value === '') {
    //   setIsValid(null);
    //   return;
    // }
    const isValid = value === answer;
    setIsValid(isValid);
    onValidityChange(isValid);
  }

  useEffect(() => {
    if (isCheckActive) {
      handleValidity();
    } else {
      setIsValid(null);
      setValue('');
    }
  }, [isCheckActive]);

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={`fragment${index}`}>
          <Text display={'inline-block'} mr={'1ch'} key={`sentence${index}`}>
            {part}
          </Text>
          {index < parts.length - 1 && (
            <Input
              type="text"
              size={'sm'}
              // placeholder={answer}
              maxW={`calc(${answer.length + 1}ch + 16px)`}
              m={'0 8px 0 0'}
              boxSizing={'border-box'}
              key={`input${index}`}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              isInvalid={isValid === false ? true : false}
              borderColor={isCheckActive && isValid ? 'green.500' : 'inherit'}
              boxShadow={
                isCheckActive && isValid ? '0 0 0 1px #38A169' : 'inherit'
              }
              isDisabled={isCheckActive}
              _disabled={{ opacity: 1 }}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};
