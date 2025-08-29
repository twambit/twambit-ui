    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function ChatSummary() {
      const [items, setItems] = useState([]);
      const [page, setPage] = useState(1);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

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

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;

      return (
        <div>
          <h1>Chat Summary</h1>
        <ul className="list-disc pl-9">
            {items.map(item => (
              <li className="text-red-500 bg-blue-500 hover:bg-white-500" key={item.id}>{item.name}</li> // Replace with your item structure
            ))}
          </ul>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      );
    }

    export default ChatSummary;