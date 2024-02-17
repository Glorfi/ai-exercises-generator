import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
} from '@chakra-ui/react';
import { ExThumbnailButton } from './ExThumbNailButton';
import { IExercise } from '../interfaces/exercise';
import { useDeleteExerciseMutation } from '../store/main-api/mutations/deleteExercise';
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { LSHandler } from '../utils/handleLocalStorage';

interface IExThumbnailMenuProps {
  exData: IExercise;
}

export const ExThumbnailMenu = (props: IExThumbnailMenuProps): JSX.Element => {
  const jwt = LSHandler.getJwt();
  const { exData } = props;
  const [deleteExercise, { data }] = useDeleteExerciseMutation({
    fixedCacheKey: 'deleteEx',
  });

  function handleDeleteExercise(e: React.MouseEvent) {
    console.log(e.target);
    console.log(e.currentTarget);
    e.stopPropagation();
    deleteExercise({ token: jwt, id: exData._id });
  }

  return (
    <Menu closeOnBlur closeOnSelect placement={'bottom'}>
      <MenuButton as={ExThumbnailButton}></MenuButton>
      <MenuList bgColor={'background'}>
        <MenuItem>Share</MenuItem>
        <MenuItem onClick={handleDeleteExercise}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

//ON HOVER REALISATION
// const { isOpen, onOpen, onClose } = useDisclosure();

// return (
//   <Menu isOpen={isOpen} onClose={onClose}>
//     <MenuButton as={ExThumbnailButton} onMouseOver={onOpen}></MenuButton>
//     <MenuList onMouseLeave={onClose}>
//       <MenuItem>Download</MenuItem>
//       <MenuItem>Create a Copy</MenuItem>
//       <MenuItem>Mark as Draft</MenuItem>
//       <MenuItem>Delete</MenuItem>
//       <MenuItem>Attend a Workshop</MenuItem>
//     </MenuList>
//   </Menu>
// );
