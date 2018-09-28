import constants from "../constants/actionTypes";

const initialState = {
  news: []
};
export default (state = initialState, action) => {
  const updated = Object.assign({}, state);
  switch (action.type) {
    case constants.NEWS_RECEIVED:
      updated["news"] = action.news;
      return updated;

    default:
      return state;
  }
};
