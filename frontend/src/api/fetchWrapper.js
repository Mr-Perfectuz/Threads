const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiFetch = (path, options = {}) => {
  const url = path.startsWith("http")
    ? path
    : `${BASE_URL}${path.startsWith("/") ? path : "/" + path}`;
  return fetch(url, {
    ...options,
    credentials: "include",
  });
};
