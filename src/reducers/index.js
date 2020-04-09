import _ from 'lodash';

const initialState = {
  favorites: [],
  settings_quantity: 9,
  settings_geolocation: false,
  settings_weather: false,
};

const localStorageState = {
  favorites: JSON.parse(localStorage.getItem('favorites')).favorites,
  settings_quantity: JSON.parse(localStorage.getItem('settings_quantity')).settings_quantity,
  settings_geolocation: JSON.parse(localStorage.getItem('settings_geolocation'))
    .settings_geolocation,
  settings_weather: JSON.parse(localStorage.getItem('settings_weather')).settings_weather,
};

const ifState = localStorageState || initialState;

const rootReducer = (state = ifState, action) => {
  switch (action.type) {
    case 'CHANGE_SETTING':
      localStorage.setItem(
        action.payload.settingType,
        JSON.stringify({
          [action.payload.settingType]: Object.values(action.payload)[0],
        }),
      );
      return {
        // ...state,
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
        // ...state,
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
        // ...state,
        favorites: _.filter(state.favorites, i => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
