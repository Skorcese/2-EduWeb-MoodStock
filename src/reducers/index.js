import _ from 'lodash';

const lsFav = JSON.parse(localStorage.getItem('favorites')) || [];
const lsSq = JSON.parse(localStorage.getItem('settings_quantity')) || 9;
const lsSg = JSON.parse(localStorage.getItem('settings_geolocation')) || false;
const lsSw = JSON.parse(localStorage.getItem('settings_weather')) || false;

const initialState = {
  favorites: lsFav,
  settings_quantity: lsSq,
  settings_geolocation: lsSg,
  settings_weather: lsSw,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SETTING':
      localStorage.setItem(
        action.payload.settingType,
        JSON.stringify({
          [action.payload.settingType]: Object.values(action.payload)[0],
        }),
      );
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
        localStorage.setItem(
          'favorites',
          JSON.stringify({
            // ...state,
            favorites: [...state.favorites, action.payload],
          }),
        );

      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'REMOVE_FAVORITE':
      localStorage.setItem(
        'favorites',
        JSON.stringify({
          // ...state,
          favorites: _.filter(state.favorites, i => i.id !== action.payload.id),
        }),
      );

      return {
        ...state,
        favorites: _.filter(state.favorites, i => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
