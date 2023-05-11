export interface ListGuest {
  name: string;
  titleName: string;
  id: number;
}

interface State {
  data: ListGuest[];
}

const initialState: State = {
  data: [
    {
      id: 1,
      name: 'Markonah',
      titleName: 'MR',
    },
    {
      id: 2,
      name: 'Johny Doe doe',
      titleName: 'MRS',
    },
  ],
};

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  EDIT_ITEM = 'EDIT_ITEM',
}

interface AddItemAction {
  type: ActionTypes.ADD_ITEM;
  payload: ListGuest;
}

interface RemoveItemAction {
  type: ActionTypes.REMOVE_ITEM;
  payload: string;
}

interface EditItemAction {
  type: ActionTypes.EDIT_ITEM;
  payload: ListGuest;
}

type Action = AddItemAction | RemoveItemAction | EditItemAction;

const guestReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        data: state.data.filter(item => item.name !== action.payload),
      };
    case ActionTypes.EDIT_ITEM:
      return {
        ...state,
        data: state.data.map(item =>
          item.name === action.payload.name ? action.payload : item,
        ),
      };
    default:
      return state;
  }
};

export default guestReducer;
