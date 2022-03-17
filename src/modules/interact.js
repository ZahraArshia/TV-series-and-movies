/* eslint-disable operator-linebreak */
export const baseURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/";
export const appId = "byg3KtvqOhmd3Xt9Axu5";

export const addLike = async (itemId) => {
  fetch(`${baseURL}apps/${appId}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item_id: itemId }),
    item_id: id,
  });
};

export const getLikes = async () => {
  const response = await fetch(`${baseURL}apps/${appId}/likes`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();



};
/* 
export const postCommentAPI = async (body) => {
  const response = await fetch(`${baseURL}apps/${appId}comments/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.text();
};

export const getCommentsAPI = async (id) => {
  const response = await fetch(`${baseURL}comments?item_id=${id}`);
  const data = await response.json();
  return data;
}; */

