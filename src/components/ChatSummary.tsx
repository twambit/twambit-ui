    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
import { sortItems } from "../utils/common";
import { type MyUser } from '../types/auth';
import fakeUsers from '../data/fakeData';

    function ChatSummary() {
      const [items, setItems] = useState<any[]>([]);
      const [page, setPage] = useState(1);
      const [loading, setLoading] = useState<Boolean>(false);
      const [error, setError] = useState<any>(null);
    const [sortDirection, setSortDirection] = useState("asc");
      // Function to fetch data
      const fetchItems = async () => {
        setLoading(true);
        setError(null);
        try {
          // Replace with your API endpoint and pagination parameters
          setItems(u => [...u, ...fakeUsers]);
       // const response = await axios.get(`http://localhost:3001/api/users`);
            // const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
         // setItems(response.data); // Assuming response.data is an array of items
        } catch (err) {
          setError('Failed to fetch items.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      // Fetch data on component mount and when 'page' changes
      useEffect(() => {
        fetchItems();
      }, [page]); // Dependency array ensures refetch when page changes

      // Handle "Next" button click
     const addUser = () => {
 //   if (!name || !priority) return;
    const newItem = {
      id: items.length + 1,
      name:"new user",
      favorite: false
    };
    setItems([...items, newItem]);
    //setName("");
   // setPriority(0);
  };
  const handleFavChange = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item 
      )
    );
  };
          const sortItem = () => {
          setSortDirection((sd) => (sd === 'asc') ? 'decs' :'asc' );
        };

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;

      
        const sortedItems = sortItems(items, sortDirection, 'username', 'string');

      return (
        <div>
          <h1>User List</h1>

              <div className="max-w-md mx-auto p-4 rounded-lg shadow-lg bg-white dark:bg-gray-900">
      <table className="min-w-full text-left table-fixed">
        <thead className="border-b-2 border-gray-300 dark:border-gray-700">
          <tr>
            <th className="w-1/2 py-2 text-sm font-bold text-gray-500 dark:text-gray-400">
              Name
            </th>
            <th className="w-1/2 py-2 text-sm font-bold text-gray-500 dark:text-gray-400">
          Favorite
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 dark:border-gray-800 transition-colors duration-200 ${
                index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
              }`}
            >
              <td className="w-1/2 py-2 px-4 text-sm text-gray-900 dark:text-white">
                {item.username}
              </td>
              <td className="w-1/2 py-2 px-4 text-sm text-gray-900 dark:text-white">
                 <button  style={{ cursor: "pointer" }} onClick={() => handleFavChange(item.id)}>
                  {item.isFavorite ? '❤️' : '♡'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
         <button 
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         onClick={addUser}>
          Add User
          </button>    
          <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded"
              onClick={sortItem}
        >
          A-Z
        </button>
        </div>
      );
    }

    export default ChatSummary;