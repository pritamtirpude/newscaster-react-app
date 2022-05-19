import { NEWS_ACTION_TYPES } from "./news.types";
import { createAction } from "../../util/reducer/reducer.utils";
import {
  latestHeadlinesUrl,
  politicsNewsUrl,
  businessNewsUrl,
  economicsNewsUrl,
  financeNewsUrl,
  entertainmentNewsUrl,
  musicNewsUrl,
  scienceNewsUrl,
  gamingNewsUrl,
  travelNewsUrl,
  techNewsUrl,
  sportNewsUrl,
  beautyNewsUrl,
  worldNewsUrl,
} from "../../api/api.urls";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchNewsLoading = () =>
  createAction(NEWS_ACTION_TYPES.FETCH_NEWS_LOADING);

const fetchNewsSuccess = (newsArray) =>
  createAction(NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS, newsArray);

const fetchNewsErrors = (error) =>
  createAction(NEWS_ACTION_TYPES.FETCH_NEWS_FAILED, error);

// Headlines News
export const newsHeadLinesAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const headlinesArray = await axios.get(latestHeadlinesUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(headlinesArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Politics News
export const newsPoliticsAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const politicsArray = await axios.get(politicsNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(politicsArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Business News
export const newsBusinessAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const businessArray = await axios.get(businessNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(businessArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Economics News
export const newsEconomicsAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const economicsArray = await axios.get(economicsNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(economicsArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Finance News
export const newsFinanceAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const financeArray = await axios.get(financeNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(financeArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Entertainment News
export const newsEntertainmentAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const entertainmentArray = await axios.get(entertainmentNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(entertainmentArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Music News
export const newsMusicAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const musicArray = await axios.get(musicNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(musicArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Science News
export const newsScienceAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const scienceArray = await axios.get(scienceNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(scienceArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Gaming News
export const newsGamingAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const gamingArray = await axios.get(gamingNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(gamingArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Travel News
export const newsTravelAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const travelArray = await axios.get(travelNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(travelArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Tech News
export const newsTechAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const techArray = await axios.get(techNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(techArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Sport News
export const newsSportAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const sportArray = await axios.get(sportNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(sportArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// Beauty News
export const newsBeautyAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const beautyArray = await axios.get(beautyNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(beautyArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};

// World News
export const newsWorldAsync = async (dispatch) => {
  dispatch(fetchNewsLoading);

  const worldArray = await axios.get(worldNewsUrl(), {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    dispatch(fetchNewsSuccess(worldArray.data.articles));
  } catch (error) {
    dispatch(fetchNewsErrors(error));
  }
};
