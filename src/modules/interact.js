export const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
export const appId = 'byg3KtvqOhmd3Xt9Axu5';

export const addLike = async (itemId) => {
  fetch(`${baseURL}apps/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
};

export const getLikes = async () => {
  const response = await fetch(`${baseURL}apps/${appId}/likes`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};