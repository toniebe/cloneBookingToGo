const initialState = {
  data: {
    name: 'Andreas Andreas',
    title: 'Mr',
    email: 'andreasandreas@gmail.com',
    phone: '+628000002222',
  },
};

export const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CHANGE_PEOPLE_ORDER':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
