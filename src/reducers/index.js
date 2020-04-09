import _ from 'lodash';

const initialState = {
  favorites: [],
  settings_quantity: 9,
  settings_geolocation: true,
  settings_weather: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SETTING':
      return {
        ...state,
        [action.payload.settingType]: Object.values(action.payload)[0],
      };
    case 'FETCH_SETTING':
      return {
        ..._.pick(state, ['settings_quantity', 'settings_geolocation', 'settings_weather']),
      };
    case 'ADD_FAVORITE':
      if (!state.favorites.find(i => i.id === action.payload.id))
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      break;
    case 'REMOVE_FAVORITE':
      console.log(action.payload);
      return {
        ...state,
        favorites: _.filter(state.favorites, i => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
