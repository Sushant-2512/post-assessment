const intialState = {data: [], start: false};
const showReducer = (state = intialState, action) => {
  console.log(action);

  switch (action.type) {
    case 'ADD':
      // console.log({...state, data: [...state.data, action.payload]});
      return {...state, data: [...state.data, action.payload]};
    case 'START':
      console.log({...state, start: action.payload});
      
      return {...state, start: action.payload};
    default:
      return state;
  }
};
export default showReducer;
