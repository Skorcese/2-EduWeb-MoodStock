export const fetchSettings = () => {
  return {
    type: 'FETCH_SETTING',
    payload: {
      chuj: 'dupsko',
    },
  };
};

export const changeSetting = (settingType, val) => {
  return {
    type: 'CHANGE_SETTING',
    payload: {
      [settingType]: val,
      settingType,
    },
  };
};
