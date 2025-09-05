import { useState, useEffect } from 'react';
import { sortItems } from "../../utils/common";
import { useAppDispatch, useAppSelector } from '../../app/store';

import {
 updateFavorite,
  saveBulkUsers,
  loadFromLocalStorage,
} from './usersSlice';

const LoadingSpinner = () => (
  <div className="spinner-container">
      <div className="w-10 h-10 border-4 border-solid border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

    function UserList() {
      const dispatch = useAppDispatch();
      const listItems = useAppSelector((state) => state.list.users);
      const status = useAppSelector((state) => state.list.status);
      const [error, setError] = useState<any>(null);
      const [sortDirection, setSortDirection] = useState("asc");

      // Load initial state from local storage on component mount
  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);

    const handleFavChange = (id: number) => {
      // this is where I would PUT to API
    dispatch(updateFavorite({ id }));
  };

  const handlepostUsersToApi = () => {
    dispatch(saveBulkUsers(listItems));
  }

  const sortItem = () => {
          setSortDirection((sd) => (sd === 'asc') ? 'decs' :'asc' );
  };

  if (error) return <p>Error: {error}</p>;   

  let content;
  if (status === 'loading' || !listItems) {
    content = <LoadingSpinner />;
  } else if (status === 'failed') {
    content = <div className="error-message">Error: {error}</div>;
  } else {
            const sortedItems = sortItems(listItems, sortDirection, 'username', 'string');
         content = (
        <div>
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
          {sortedItems?.map((item, index) => (
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
         style={{ cursor: "pointer" }} 
         onClick={handlepostUsersToApi}>
         Save
          </button>    
  
        </div>
      );
    }

        return (
    <div className="max-w-md mx-auto p-4 rounded-lg shadow-lg bg-white dark:bg-gray-900">
      <h1>User List</h1><span>        <button
      style={{ cursor: "pointer" }} 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded"
              onClick={sortItem}
        >
          A-Z
        </button></span>
      {content}
    </div>
  );
}

export default UserList;