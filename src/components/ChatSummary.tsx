    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
import { sortItems } from "../utils/common";
import { type MyUser } from '../types/auth';

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
        const response = await axios.get(`http://localhost:3001/api/users`);
            // const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
          setItems(response.data); // Assuming response.data is an array of items
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
      const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
      };

          const sortItem = () => {
           // const isOn = (sortDirection === 'asc') ? 'decs' :'asc' ;
          setSortDirection((sd) => (sd === 'asc') ? 'decs' :'asc' );
        };

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;

      
        const sortedItems = sortItems(items, sortDirection, 'username', 'string');

      return (
        <div>
          <h1>Chat Summary</h1>
        <ul className="list-disc pl-9">
            {sortedItems.map(item => (
              <li className="text-red-500 bg-blue-500 hover:bg-white-500" key={item.id}>{item.username}</li> // Replace with your item structure
            ))}
          </ul>
          <button onClick={handleNextPage}>Next Page</button>
                 <button
          onClick={sortItem}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Sort Toggle
        </button>
        </div>
      );
    }

    export default ChatSummary;