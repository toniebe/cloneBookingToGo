/* eslint-disable react-hooks/exhaustive-deps */
import BookingPresentation from '@presentation/BookingPresentation';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getChosenHotelType} from 'src/shared/types/payloadType';
import {navigationProps} from 'src/shared/types/navigationType';
import {mockOption, mockProgressBar} from '../data/mockData';

const BookingContainer = ({navigation}: navigationProps) => {
  const dataBooking = useSelector((state: any) => state.hotel);
  const dataOrder = useSelector((state: any) => state.order);
  const dataGuest = useSelector((state: any) => state.guest);

  // state for booking
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const [stateBooking] = useState<any>(dataBooking.data);
  const {
    chosen_hotel_detail,
    chosen_hotel_params,
    chosen_hotel_prices,
    chosen_hotel_room,
  }: getChosenHotelType = stateBooking.get_chosen_hotel;
  // --- end state ----

  // --- function for booking ------
  function calculateTotalDays(checkInDate: Date, checkOutDate: Date): string {
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24)).toString(); // Convert milliseconds to days

    return days;
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: any = {day: '2-digit', month: 'long', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate;
  }

  const handleRadioButtonPress = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {}, [stateBooking]);

  // ---- end function for booking -----
  return (
    <BookingPresentation
      progressBar={mockProgressBar}
      image_url={chosen_hotel_detail.images[0].url}
      title={chosen_hotel_detail.hotel_name}
      roomName={chosen_hotel_room.room_name}
      totalBook={calculateTotalDays(
        new Date(chosen_hotel_params.check_in),
        new Date(chosen_hotel_params.check_out),
      )}
      totalGuest={(
        chosen_hotel_params.guest_adult +
        chosen_hotel_params.guest_infant +
        chosen_hotel_params.guest_children
      ).toString()}
      totalRoom={chosen_hotel_params.total_room.toString()}
      checkinDate={formatDate(chosen_hotel_params.check_in)}
      checkoutDate={formatDate(chosen_hotel_params.check_out)}
      isRefundable={chosen_hotel_prices.is_refundable}
      mockOption={mockOption}
      selectOption={selectedOption}
      actionSelect={value => handleRadioButtonPress(value)}
      actionChangeOrder={() => navigation.navigate('ChangeOrder')}
      email={dataOrder.data.email}
      name={dataOrder.data.name}
      phoneNumber={dataOrder.data.phoneNumber}
      titleName={dataOrder.data.titleName}
      listGuest={dataGuest.data}
      actionEditGuest={() => navigation.navigate('ChangeGuest')}
    />
  );
};

export default BookingContainer;
