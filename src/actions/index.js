// export const fetchSettings = () => {
//   return {
//     type: 'FETCH_SETTING',
//     payload: {
//
//     },
//   };
// };

export const changeSetting = (settingType, val) => {
  return {
    type: 'CHANGE_SETTING',
    payload: {
      [settingType]: val,
      settingType,
    },
  };
};

export const addFavorite = image => {
  return {
    type: 'ADD_FAVORITE',
    payload: {
      ...image,
    },
  };
};

export const removeFavorite = image => {
  return {
    type: 'REMOVE_FAVORITE',
    payload: {
      ...image,
    },
  };
};
