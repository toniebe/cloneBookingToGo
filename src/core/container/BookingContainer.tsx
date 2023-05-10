/* eslint-disable react-hooks/exhaustive-deps */
import BookingPresentation from '@presentation/BookingPresentation';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

const BookingContainer = () => {
  const dataBooking = useSelector((state: any) => state.hotel);
  useEffect(() => {
    console.log(dataBooking);
  }, []);
  return <BookingPresentation />;
};

export default BookingContainer;
