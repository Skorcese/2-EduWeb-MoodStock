import _ from 'lodash';

const lsFav = JSON.parse(localStorage.getItem('favorites'));
const lsSq = JSON.parse(localStorage.getItem('settings_quantity'));
const lsSg = JSON.parse(localStorage.getItem('settings_geolocation'));
const lsSw = JSON.parse(localStorage.getItem('settings_weather'));

const checkLsFav = _.isEmpty(lsFav) ? [] : lsFav.favorites;
const checkLsSq = _.isEmpty(lsSq) ? 9 : lsSq.settings_quantity;
const checkLsSg = _.isEmpty(lsSg) ? false : lsSg.settings_geolocation;
const checkLsSw = _.isEmpty(lsSw) ? false : lsSw.settings_weather;

const initialState = {
  favorites: checkLsFav,
  settings_quantity: checkLsSq,
  settings_geolocation: checkLsSg,
  settings_weather: checkLsSw,
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
