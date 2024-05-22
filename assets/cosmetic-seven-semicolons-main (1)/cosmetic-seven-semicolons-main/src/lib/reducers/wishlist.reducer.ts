export const wishlistInitialState = {
  items: [],
};

export default (state, { type, payload }) => {
  // console.log(type);

  switch (type) {
    case 'LOAD_WISHLIST':
      return payload;

    default:
      return state;
  }
};
