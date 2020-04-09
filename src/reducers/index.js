import _ from 'lodash';

const initialState = {
  favorites: [],
  settings_quantity: 6,
  settings_geolocation: false,
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
        // ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
