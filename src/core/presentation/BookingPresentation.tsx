import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LayoutPlatform from '@sharedComponents/organisms/LayoutPlatform';
import ItemBar, {itemBarProps} from '../components/atomics/ItemBar';
import {scale, verticalScale} from '@sharedHelper/scaling';
import {darkBlue, darkOrange} from '@sharedConstants/colors';
import CardHotel, {cardHotelProps} from '../components/atomics/CardHotel';
import FutherMore from '@sharedComponents/atoms/FutherMore';
import Divider from '@sharedComponents/atoms/Divider';
import RadioButton from '@sharedComponents/atoms/RadioButton';
import CardOrder, {cardOrderProps} from '../components/atomics/CardOrder';
import {mockOptionType} from '../data/mockData';
import CardGuest from '../components/atomics/CardGuest';
import {ListGuest} from '../store/reducer/guestReducer';
interface bookingPresentationProps {
  progressBar: itemBarProps[];
  checkinDate: string;
  checkoutDate: string;
  isRefundable: boolean;
  mockOption: mockOptionType[];
  selectOption: string;
  actionSelect: (value: any) => any;
  actionEditGuest: () => void;
  listGuest: ListGuest[];
}

const BookingPresentation = ({
  progressBar,
  title,
  image_url,
  roomName,
  totalBook,
  totalGuest,
  totalRoom,
  checkinDate,
  checkoutDate,
  isRefundable,
  mockOption,
  selectOption,
  actionSelect,
  titleName,
  email,
  name,
  phoneNumber,
  actionChangeOrder,
  listGuest,
  actionEditGuest,
}: cardHotelProps & bookingPresentationProps & cardOrderProps) => {
  return (
    <LayoutPlatform saveArea={false} style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.progressBarContainer}>
          {progressBar.map(item => (
            <>
              <ItemBar
                status={item.status}
                number={item.number}
                description={item.description}
              />
              <View style={styles.line} />
            </>
          ))}
        </View>
        <Divider />
        <View style={styles.hotelDetailContainer}>
          <View>
            <Text style={styles.textTitleSection}>Detail Pesanan</Text>
            <CardHotel
              title={title}
              image_url={image_url}
              roomName={roomName}
              totalBook={totalBook}
              totalGuest={totalGuest}
              totalRoom={totalRoom}
            />
          </View>
          <View>
            <FutherMore title="Check-In" nextTitle={checkinDate} />
            <FutherMore title="Check-Out" nextTitle={checkoutDate} />
          </View>
          {isRefundable ? (
            <View style={styles.refundContainer}>
              <Image
                source={require('@sharedAssets/icon/refund.png')}
                style={styles.iconRefund}
              />
              <Text style={styles.textRefund}>
                Dapat direfund jika dibatalkan
              </Text>
            </View>
          ) : null}
        </View>
        <Divider />
        <View style={styles.hotelDetailContainer}>
          <Text style={styles.textTitleSection}>Detail Pemesan</Text>
          <CardOrder
            titleName={titleName}
            email={email}
            name={name}
            phoneNumber={phoneNumber}
            actionChangeOrder={actionChangeOrder}
          />
          {mockOption.map(item => (
            <RadioButton
              selected={item.id === selectOption}
              label={item.label}
              onPress={() => actionSelect(item.id)}
            />
          ))}
        </View>
        <View style={[styles.hotelDetailContainer]}>
          <Text style={styles.textTitleSection}>Data Tamu</Text>
          {listGuest.map(item => (
            <CardGuest guestName={item.name} titleGuestName={item.titleName} />
          ))}
          <TouchableOpacity
            onPress={actionEditGuest}
            style={[styles.buttonContainer, {alignItems: 'flex-end'}]}>
            <Text style={styles.textButton}>Ubah Tamu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LayoutPlatform>
  );
};

export default BookingPresentation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  line: {
    flex: 0.2,
    borderBottomWidth: 2,
    marginHorizontal: scale(5),
    borderBottomColor: darkBlue,
    justifyContent: 'center',
  },

  hotelDetailContainer: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  refundContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconRefund: {
    width: scale(35),
    height: scale(35),
    tintColor: darkOrange,
    marginRight: scale(5),
  },
  textRefund: {
    color: darkOrange,
    fontSize: scale(18),
  },
  textTitleSection: {
    color: '#000',
    fontWeight: '700',
    fontSize: scale(19),
    marginVertical: verticalScale(5),
  },
  buttonContainer: {
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(10),
  },
  textButton: {
    color: darkBlue,
    textDecorationLine: 'underline',
    lineHeight: 20,
  },
});
