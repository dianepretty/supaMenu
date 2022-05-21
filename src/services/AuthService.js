import axios from "axios";

import baseUrl from "../utils/url";

export async function register(data) {
  try {
    let res = await axios.post(`${baseUrl}/user/signup`, data);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}

export async function login(data) {
  try {
    let res = await axios.post(`${baseUrl}/user/signin`, data);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}

export async function currentUser(userId) {
  try {
    let res = await axios.get(`${baseUrl}/user/${userId}`);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}

export function handler(err) {
  let error = err;

  if (err.response && err.response.data.hasOwnProperty("message"))
    error = err.response.data;
  else if (!err.hasOwnProperty("message")) error = err.toJSON();

  return new Error(error.message);
}
