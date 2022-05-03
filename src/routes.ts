const baseUrl = `https://jsonplaceholder.typicode.com`;
export const routes = {
  getComments: () => `${baseUrl}/comments`,
  getPosts: () => `${baseUrl}/posts`,
  getPhotos: () => `${baseUrl}/photos`,
};
