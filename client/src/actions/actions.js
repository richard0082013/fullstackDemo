import actionTypes from "../constants/actionTypes";

function newsReceived(news) {
  return {
    type: actionTypes.NEWS_RECEIVED,
    news: news
  };
}
function newsItemReceived(newsItem) {
  return {
    type: actionTypes.NEWSITEM_RECEIVED,
    newsItem: newsItem
  };
}
function newsItemLoading() {
  return {
    type: actionTypes.NEWSITEM_LOADING
  };
}

export function fetchNews(fakeNews) {
  return dispatch => {
    return fetch("/news")
      .then(res => res.json())
      .then(data => dispatch(newsReceived(data.data)))
      .catch(e => console.log(e));
  };
}
export function fetchNewsItem(id) {
  return dispatch => {
    return fetch(`/news/${id}`)
      .then(response => response.json())
      .then(data => dispatch(newsItemReceived(data.data)))
      .catch(e => console.log(e));
  };
}
export function submitNewsStory(data) {
  return dispatch => {
    return fetch("/news/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      mode: "cors"
    }).catch(e => console.log(e));
  };
}
