import axios from "axios";

import { baseUrl } from "../utils/url";

let token =
  "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxNTciLCJzdWIiOiIxNTciLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9DVVNUT01FUiJ9XSwidXNlciI6eyJpZCI6MTU3LCJuYW1lIjoiQmx1ZSBUZWQgMDc4MDgwODA4MCIsInVzZXJuYW1lIjoiMzQ3ODUzIiwibW9iaWxlIjoiMDc4MDgwODA4MCIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0NVU1RPTUVSIn1dLCJhY2NvdW50Tm9uRXhwaXJlZCI6dHJ1ZSwiYWNjb3VudE5vbkxvY2tlZCI6dHJ1ZSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlfSwiaWF0IjoxNjU0OTQ0NzUyLCJleHAiOjE2NTUwMzExNTJ9.Xf_TOgRchUbPE5-sLwJIxY2c2uGDJunmicmWVxLvFWu_CYEkVl-BiBFpf8X5oXZ2rm1twknPGcM9lJkXDxcdPg";

export async function getServiceProviders(page) {
  try {
    let res = await axios.get(
      `${baseUrl}/service-providers?page=${page}&size=30`,
      {
        headers: {
          Authorization: `Bearer ${token})}`,
        },
      }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function searchProvider(term, page = 0) {
  try {
    let res = await axios.get(
      `${baseUrl}/service-providers/search/keyword/${term}?page=${page}&size=30`,
      {
        headers: {
          Authorization: `Bearer ${token})}`,
        },
      }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function getProviders(page = 0) {
  try {
    let res = await axios.get(
      `${baseUrl}/service-providers?page=${page}&size=30`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function getMenuItems(page = 0) {
  try {
    let res = await axios.get(`${baseUrl}/menu-items?page=${page}&size=30`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
