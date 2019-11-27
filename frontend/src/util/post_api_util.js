import axios from 'axios';

//this will be updated later to take in a subDreddit id
export const fetchPosts = () => {
  return axios.get('/api/posts');
};

export const fetchSubDredditPosts = subId => {
  return axios.get(`/api/posts/${subId}`);
};

export const fetchPost = postId => {
  return axios.get(`/api/posts/${postId}`);
};

export const createPost = data => {
  return axios.post('/api/posts', data);
};

export const upvotePost = upvoteInfo => {
  return axios.post('/api/posts/upvote', upvoteInfo);
};