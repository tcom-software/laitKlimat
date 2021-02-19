export const PROJECT_ID = "59";
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const UPLOADS_URL = process.env.NEXT_PUBLIC_API_UPLOADS_URL;

export const GET_FILTERS = `${BASE_URL}/api/getFilterData`;

export const GET_PRODUCT = `${BASE_URL}/api/getProduct`;
export const GET_PRODUCTS = `${BASE_URL}/api/getProducts`;
export const SEARCH_PRODUCTS = `${BASE_URL}/api/searchProduct`;
export const GET_TOP_PRODUCTS = `${BASE_URL}/api/getCarouselData`;

export const GET_CATEGORIES = `${BASE_URL}/api/getCategories`;

export const GET_REVIEWS = `${BASE_URL}/api/getReviews`;
export const ADD_REVIEW = `${BASE_URL}/api/review`;

export const GET_SERVICES = `${BASE_URL}/api/getServices`;
export const CALL_BACK = `${BASE_URL}/api/oneClickOrder`;
export const ORDER = `${BASE_URL}/api/checkout`;
export const CHAT_FEEDBACK = `${BASE_URL}/api/chatFeedBack`;
