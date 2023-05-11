import {combineReducers} from 'redux';
import {hotelReducer} from './hotelReducer';
import {orderReducer} from './orderReducer';
import guestReducer from './guestReducer';

export const rootReducer = combineReducers({
  hotel: hotelReducer,
  order: orderReducer,
  guest: guestReducer,
});
