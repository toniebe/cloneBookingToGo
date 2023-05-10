export interface header {
  reason?: string;
  messages: [];
  error_code?: string;
  process_time: number;
}

export interface chosen_hotel_room {
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
