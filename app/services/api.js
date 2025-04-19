// File: services/api.js
const BASE_URL = 'https://api.escuelajs.co/api/v1/categories';

export const getCategories = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createCategory = async (data) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateCategory = async (id, data) => {
  const res = await fetch(`${BASE_URL}${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteCategory = async (id) => {
  const res = await fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
