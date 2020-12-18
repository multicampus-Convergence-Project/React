import axios from "axios";

const KakaoApi = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK 8e431887c0a5b37a3b6ae7ab5f9fb44f" // 공통으로 요청 할 헤더
  }
});

// search blog api
export const getAddress = params => {
  return KakaoApi.get("/v2/local/geo/coord2address", { params });
};