// File: pages/index.js
"use client"
import { useEffect, useState } from 'react';
import { getCategories } from './services/api';

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-50 to-purple-100">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 tracking-tight">📂 Category Manager</h1>

      <div className="overflow-x-auto shadow-2xl rounded-2xl bg-white">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider border-r border-blue-200">ID</th>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, idx) => (
              <tr
                key={cat.id}
                className={`${
                  idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-50 transition duration-300`}
              >
                <td className="py-3 px-6 text-gray-800 font-medium border-b border-gray-200">{cat.id}</td>
                <td className="py-3 px-6 text-gray-700 border-b border-gray-200">{cat.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
