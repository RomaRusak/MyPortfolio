const nav = (state = { state: 'home' }, action) => {
  switch (action.type) {
    case 'SET_NAV_STATE':
      return { ...state, state: action.navState };

    default:
      return state;
  }
};

export default nav;
