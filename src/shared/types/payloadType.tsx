export interface headerType {
  reason?: string;
  messages: [];
  error_code?: string;
  process_time: number;
}

export interface chosenHotelRoomType {
  meal: string;
  region: string;
  meal_code: string;
  room_name: string;
  sply_code: string;
  avail_sply: string;
  hotel_sply: string;
  room_grade: string;
  vendor_code: string;
  hotel_room_type_selected: string;
}

export interface imageChoosenHotel {
  url: string;
  title: string;
  thumbnail: string;
}

export interface descriptionChoosenHotelType {
  title: string;
  description: string;
}
export interface chosenHotelDetailType {
  zip: string;
  star: number;
  phone: string;
  images: imageChoosenHotel[];
  address: string;
  latitude: number;
  longitude: number;
  facilities: string[];
  hotel_name: string;
  descriptions: descriptionChoosenHotelType[];
  region_hotel: string;
  is_recommended: boolean;
}

export interface chosenHotelParams {
  check_in: string;
  check_out: string;
  hotel_code: string;
  hotel_name: string;
  total_room: number;
  guest_adult: number;
  guest_infant: number;
  guest_children: number;
  guest_children_ages: any[];
}

export interface choosenHotelCxlPolicies {
  cxl_fee: number;
  cxl_remark: string;
  cxl_end_date: string;
  cxl_start_date: string;
}

export interface infoImportantInformationType {
  info: string;
}

export interface priceDetailHotelType {
  total: number;
  currency: string;
  origin_total: number;
  corporate_fee: number;
  discount_price: number;
}

export interface chosenHotelPrices {
  cxl_policies: choosenHotelCxlPolicies[];
  precode_book: string;
  price_detail: priceDetailHotelType;
  is_refundable: boolean;
  discount_description: string;
  important_informations: infoImportantInformationType[];
}

export interface payloadBookingHotel {
  objectId: string;
  createdAt: string;
  updatedAt: string;
  chosen_hotel: {
    data: getChosenHotelType;
    header: headerType;
  };
}

export interface getChosenHotelType {
  chosen_hotel_room: chosenHotelRoomType;
  chosen_hotel_detail: chosenHotelDetailType;
  chosen_hotel_params: chosenHotelParams;
  chosen_hotel_prices: chosenHotelPrices;
  chosen_hotel_expired: string;
}
