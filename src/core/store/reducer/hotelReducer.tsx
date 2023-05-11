const initialState = {
  data: {},
};

export const hotelReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_API_HOTEL_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
