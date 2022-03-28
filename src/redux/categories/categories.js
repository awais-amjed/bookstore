const CHECK_STATUS = 'CHECK_STATUS';

const checkStatus = ({ id }) => ({
  type: CHECK_STATUS,
  id,
});

const categoriesReducer = (state = [], actions) => {
  switch (actions.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export { categoriesReducer as default, checkStatus };
