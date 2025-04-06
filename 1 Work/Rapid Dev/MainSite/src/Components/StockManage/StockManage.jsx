import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import './StockManage.css';

const StockManage = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Cement OPC 53 Grade', quantity: 50, unit: 'Bag', category: 'Cement', price: 350 },
    { id: 2, name: 'River Sand', quantity: 100, unit: 'KG', category: 'Sand', price: 12 },
    { id: 3, name: 'Crushed Stone Aggregate', quantity: 200, unit: 'KG', category: 'Aggregate', price: 18 },
    { id: 4, name: 'Steel Reinforcement Bars', quantity: 30, unit: 'Pieces', category: 'Steel', price: 75 }
  ]);

  const [categories] = useState(['Cement', 'Sand', 'Aggregate', 'Steel', 'Bricks', 'Paint', 'Plumbing', 'Electrical', 'Wood']);
  const [filterCategory, setFilterCategory] = useState('All');
  
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    unit: 'KG',
    category: 'Cement',
    price: ''
  });

  const [editingItem, setEditingItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (filterCategory === 'All') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === filterCategory));
    }
  }, [items, filterCategory]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: name === 'quantity' || name === 'price' ? 
        (value === '' ? '' : parseFloat(value)) : value
    });
  };

  const handleAddItem = () => {
    if (!newItem.name || !newItem.quantity || !newItem.price) {
      alert('Please fill all fields');
      return;
    }

    if (editingItem) {
      setItems(items.map(item => 
        item.id === editingItem.id ? 
        { ...newItem, id: item.id } : item
      ));
      setEditingItem(null);
    } else {
      const maxId = items.length > 0 ? Math.max(...items.map(item => item.id)) : 0;
      setItems([...items, { ...newItem, id: maxId + 1 }]);
    }

    setNewItem({
      name: '',
      quantity: '',
      unit: 'KG',
      category: 'Cement',
      price: ''
    });
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setNewItem({
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
      category: item.category,
      price: item.price
    });
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setNewItem({
      name: '',
      quantity: '',
      unit: 'KG',
      category: 'Cement',
      price: ''
    });
  };

  return (
    <div className="main-content">
      <div className="stock-form-container">
        <h2>{editingItem ? 'Edit Stock Item' : 'Add New Stock'}</h2>
        <div className="stock-form">
          <div className="form-group">
            <label>Item Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter item name" 
              value={newItem.name}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label>Quantity</label>
            <div className="quantity-group">
              <input 
                type="number" 
                name="quantity" 
                placeholder="Amount" 
                value={newItem.quantity}
                onChange={handleInputChange}
              />
              <select 
                name="unit" 
                value={newItem.unit}
                onChange={handleInputChange}
              >
                <option value="KG">KG</option>
                <option value="Bag">Bag</option>
                <option value="Pieces">Pieces</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>Category</label>
            <select 
              name="category" 
              value={newItem.category}
              onChange={handleInputChange}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label>Selling Price (₹)</label>
            <input 
              type="number" 
              name="price" 
              placeholder="0.00" 
              value={newItem.price}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-buttons">
            <button className="add-btn" onClick={handleAddItem}>
              {editingItem ? 'Update Stock' : 'Add Stock'}
            </button>
            {editingItem && (
              <button className="cancel-btn" onClick={handleCancelEdit}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="stock-list-container">
        <div className="stock-filter">
          <label>View Stock:</label>
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <table className="stock-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Selling Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity} {item.unit}</td>
                <td>{item.category}</td>
                <td>₹{item.price}/{item.unit}</td>
                <td className="action-buttons">
                  <button className="edit-btn" onClick={() => handleEdit(item)}>
                    <Pencil size={16} />
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockManage;