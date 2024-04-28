// actions/propertyActions.js
import axios from 'axios';

export const propertyActions = (city, projectType, page) => {
  return async dispatch => {
    try {
      const response = await axios.get(
        'https://api.housivity.com/api/v1/property',
        {
          params: {
            city,
            projectType,
            page,
          },
        },
      );
      dispatch(setProperties(response.data));
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };
};

const setProperties = properties => ({
  type: 'SET_PROPERTIES',
  payload: properties,
});

export default propertyActions;
