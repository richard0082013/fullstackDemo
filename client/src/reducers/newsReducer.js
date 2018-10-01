import constants from "../constants/actionTypes";

const initialState = {
  news: [],
  newsItem: {},
  newItemLoading: true
};
export default (state = initialState, action) => {
  const updated = Object.assign({}, state);
  switch (action.type) {
    case constants.NEWS_RECEIVED:
      updated["news"] = action.news;
      return updated;
    case constants.NEWSITEM_RECEIVED:
      updated["newsItem"] = action.newsItem;
      updated["newsItemLoading"] = false;
      return updated;
    case constants.NEWSITEM_LOADING:
      updated["newsItemLoading"] = true;
      return updated;
    default:
      return state;
  }
};
