import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
  'content-type': 'application/octet-stream',
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '34b0a296bamshf75b758f0ba8deep1d86f4jsnd362ef343518',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({
  url,
  headers: cryptoNewsApiHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
