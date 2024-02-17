import { Box, HStack, Text } from '@chakra-ui/react';
import ExerciseForm from '../../components/ExerciseForm';
import { SideBarMenu } from '../../components/SideBar/SideBar';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { IExercise } from '../../interfaces/exercise';
import { ExerciseSentenceInput } from '../../components/ExerciseSentenceInput';
import { useDeleteExerciseMutation } from '../../store/main-api/mutations/deleteExercise';
import { APP_PATHS } from '../../constants/AppPaths';
import { ExerciseSelectInput } from '../../components/ExerciseSelectInput';

export const DashboardExercisePage = (): JSX.Element => {
  const { id } = useParams();
  const [userData] = useContext(UserContext);
  const [_, { data: deletedEx }] = useDeleteExerciseMutation({
    fixedCacheKey: 'deleteEx',
  });
  const [ex, setEx] = useState<IExercise | null | undefined>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      setEx(
        userData.exercises.find((item) => {
          return item._id === id;
        })
      );
    }
  }, [userData]);

  useEffect(() => {
    if (deletedEx?._id === id) {
      navigate(APP_PATHS.DASHBOARD);
    }
  }, [deletedEx]);

  useEffect(() => {
    console.log(ex);
  }, [ex]);
  return (
    <Box minH={'100vh'}>
      <HStack alignItems={'flex-start'}>
        <SideBarMenu />
        <HStack alignItems={'center'} w={'100%'} justifyContent={'center'}>
          {ex?.type === 'fillInGaps' ? (
            <ExerciseSentenceInput sentenceList={ex.sentenceList} />
          ) : null}
          {ex?.type === 'multipleChoice' ? (
            <ExerciseSelectInput sentenceList={ex.sentenceList} />
          ) : null}
        </HStack>
      </HStack>
    </Box>
  );
};
