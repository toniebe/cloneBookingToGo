import AddGuestPresentation from '@presentation/AddGuestPresentation';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionTypes, ListGuest} from '../store/reducer/guestReducer';
import {navigationProps} from 'src/shared/types/navigationType';

const AddGuestContainer = ({navigation}: navigationProps) => {
  const dataGuest = useSelector((state: any) => state.guest);
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [valueDropdown, setValue] = useState(null);

  const handleAddGuest = () => {
    const newGuest: ListGuest = {
      id: dataGuest.data.length - 1,
      name: '',
      titleName: 'MR',
    };

    dispatch({
      type: ActionTypes.ADD_ITEM,
      payload: newGuest,
    });
  };

  const handleValueNameChange = (value: string, index: number) => {
    dataGuest.data[index].name = value;

    dispatch({
      type: ActionTypes.EDIT_ITEM,
      payload: index,
    });
  };

  const handleTitleNameChange = (value: string, index: number) => {
    dataGuest.data[index].titleName = value;

    dispatch({
      type: ActionTypes.EDIT_ITEM,
      payload: index,
    });
  };

  const handleActionDelete = (guest: ListGuest) => {
    dispatch({
      type: ActionTypes.REMOVE_ITEM,
      payload: guest.name,
    });
  };
  return (
    <AddGuestPresentation
      handleAddGuest={handleAddGuest}
      listGuest={dataGuest.data}
      handleValueNameChange={(value, index) =>
        handleValueNameChange(value, index)
      }
      handleTitleNameChange={(value, index) =>
        handleTitleNameChange(value, index)
      }
      setValue={setValue}
      actionDelete={guest => handleActionDelete(guest)}
      actionBack={() => navigation.goBack()}
    />
  );
};

export default AddGuestContainer;
