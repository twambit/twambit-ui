import React, { useState } from "react";

export default function ItemManager() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  const addItem = () => {
    if (!name || !priority) return;
    const newItem = {
      id: Date.now(),
      name,
      priority,
    };
    setItems([...items, newItem]);
    setName("");
    setPriority("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const sortedItems = items.sort((a, b) => a.priority - b.priority);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Item Manager</h2>

      {/* Input form */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
        />
        <input
          type="number"
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border rounded px-2 py-1 w-28"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Item
        </button>
      </div>

      {/* Items table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Name</th>
            <th className="border px-2 py-1 text-left">Priority</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center py-2">
                No items yet.
              </td>
            </tr>
          ) : (
            sortedItems.map((item) => (
              <tr key={item.id}>
                <td className="border px-2 py-1">{item.name}</td>
                <td className="border px-2 py-1">{item.priority}</td>
                <td className="border px-2 py-1 text-center">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}