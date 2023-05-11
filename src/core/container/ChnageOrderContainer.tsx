import React, {useState} from 'react';
import ChangeOrderPresentation from '@presentation/ChangeOrderPresentation';
import {useDispatch, useSelector} from 'react-redux';
import {navigationProps} from 'src/shared/types/navigationType';

const ChnageOrderContainer = ({navigation}: navigationProps) => {
  const dataOrder = useSelector((state: any) => state.order);
  const dispatch = useDispatch();
  const [guest, setGuest] = useState(dataOrder.data);
  const [name, setName] = useState<string>(guest.name);
  const [email, setEmail] = useState<string>(guest.email);
  const [phone, setPhone] = useState<string>(guest.phone);
  const [valueDropdown, setValueDropdown] = useState(guest.title);
  const [open, setOpen] = useState<boolean>(false);

  const handleChangePeople = () => {
    let data = {
      name: name,
      title: valueDropdown.value,
      email: email,
      phone: phone,
    };
    setGuest(data);
    dispatch({
      type: 'CHANGE_PEOPLE_ORDER',
      payload: data,
    });
    navigation.navigate('Booking');
  };

  return (
    <ChangeOrderPresentation
      actionSave={handleChangePeople}
      onChangeEmail={value => setEmail(value)}
      onChangeName={value => setName(value)}
      onChangePhone={value => setPhone(value)}
      setOpen={setOpen}
      setValue={setValueDropdown}
      valueDropdown={valueDropdown}
      open={open}
      valueEmail={email}
      valueName={name}
      valuePhone={phone}
    />
  );
};

export default ChnageOrderContainer;
