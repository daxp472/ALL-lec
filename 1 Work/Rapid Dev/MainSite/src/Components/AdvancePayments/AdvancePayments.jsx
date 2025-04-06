import React, { useState } from 'react';
import './AdvancePayments.css';

const AdvancePayments = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Ramesh Kumar',
      advanceGiven: 1000,
      advanceUsed: 250,
      balance: 750,
      paymentMethod: 'Cash', // Added payment method to customer
      bills: [
        {
          billNo: 'B001',
          date: '01 March 2025',
          items: [
            { product: 'Cement OPC 53 Grade', qty: 5, pricePerQty: 350, amount: 1750 },
            { product: 'River Sand', qty: 10, pricePerQty: 12, amount: 120 },
          ],
          totalAmount: 1870,
          advanceRemaining: 750,
        },
        {
          billNo: 'B004',
          date: '05 March 2025',
          items: [
            { product: 'Crushed Stone Aggregate', qty: 8, pricePerQty: 18, amount: 144 },
          ],
          totalAmount: 144,
          advanceRemaining: 606,
        },
      ],
    },
    {
      id: 2,
      name: 'Priya Sharma',
      advanceGiven: 2500,
      advanceUsed: 2200,
      balance: 300,
      paymentMethod: 'Online', // Added payment method to customer
      bills: [
        {
          billNo: 'B002',
          date: '02 March 2025',
          items: [
            { product: 'Crushed Stone Aggregate', qty: 15, pricePerQty: 18, amount: 270 },
          ],
          totalAmount: 270,
          advanceRemaining: 300,
        },
      ],
    },
    {
      id: 3,
      name: 'Ajay Patel',
      advanceGiven: 5000,
      advanceUsed: 1500,
      balance: 3500,
      paymentMethod: 'Card', // Added payment method to customer
      bills: [
        {
          billNo: 'B003',
          date: '03 March 2025',
          items: [
            { product: 'Steel Reinforcement Bars', qty: 2, pricePerQty: 75, amount: 150 },
          ],
          totalAmount: 150,
          advanceRemaining: 3500,
        },
        {
          billNo: 'B005',
          date: '06 March 2025',
          items: [
            { product: 'Cement OPC 53 Grade', qty: 3, pricePerQty: 350, amount: 1050 },
            { product: 'River Sand', qty: 20, pricePerQty: 12, amount: 240 },
          ],
          totalAmount: 1290,
          advanceRemaining: 2210,
        },
      ],
    },
  ]);

  const [newPayment, setNewPayment] = useState({ customerName: '', advanceAmount: '', paymentMethod: 'Cash' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBills, setSelectedBills] = useState(null);
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayment({ ...newPayment, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsExistingCustomer(e.target.checked);
    setNewPayment({ ...newPayment, customerName: '' });
  };

  const handleAddPayment = () => {
    if (!newPayment.customerName || !newPayment.advanceAmount || !newPayment.paymentMethod) {
      alert('Please fill all fields');
      return;
    }

    const advanceAmount = parseFloat(newPayment.advanceAmount);
    if (advanceAmount <= 0) {
      alert('Advance amount must be a positive number');
      return;
    }

    const existingCustomer = customers.find(c => c.name.toLowerCase() === newPayment.customerName.toLowerCase());
    if (existingCustomer) {
      setCustomers(customers.map(c =>
        c.name.toLowerCase() === newPayment.customerName.toLowerCase()
          ? { ...c, advanceGiven: c.advanceGiven + advanceAmount, balance: c.balance + advanceAmount, paymentMethod: newPayment.paymentMethod }
          : c
      ));
    } else {
      setCustomers([...customers, {
        id: customers.length + 1,
        name: newPayment.customerName,
        advanceGiven: advanceAmount,
        advanceUsed: 0,
        balance: advanceAmount,
        paymentMethod: newPayment.paymentMethod,
        bills: [],
      }]);
    }

    setNewPayment({ customerName: '', advanceAmount: '', paymentMethod: 'Cash' });
    setIsExistingCustomer(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowBills = (bills, customerPaymentMethod, customerName) => {
    setSelectedBills({ bills, customerPaymentMethod, customerName });
  };

  const handleCloseModal = () => {
    setSelectedBills(null);
  };

  const handlePrintBill = (bill, customerPaymentMethod, customerName) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Bill ${bill.billNo}</title>
          <style>
            body { font-family: 'Segoe UI', sans-serif; padding: 20px; }
            h2 { color: #ff6b35; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #3a3a5a; padding: 10px; text-align: left; }
            th { background-color: #2b2b40; color: #a1a5b7; }
            td { background-color: #1e1e2d; color: #ffffff; }
            .total { font-weight: bold; }
            .payment-method { margin-top: 10px; font-style: italic; }
          </style>
        </head>
        <body>
          <h2>Bill No: ${bill.billNo}</h2>
          <p>Customer Name: ${customerName}</p>
          <p>Date: ${bill.date}</p>
          <p class="payment-method">Payment Method: ${customerPaymentMethod}</p>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price/Qty</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${bill.items.map(item => `
                <tr>
                  <td>${item.product}</td>
                  <td>${item.qty}</td>
                  <td>₹${item.pricePerQty}</td>
                  <td>₹${item.amount}</td>
                </tr>
              `).join('')}
              <tr class="total">
                <td colspan="3">Total Amount</td>
                <td>₹${bill.totalAmount}</td>
              </tr>
              <tr class="total">
                <td colspan="3">Advance Remaining</td>
                <td>₹${bill.advanceRemaining}</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="main-content">
      <div className="advance-payment-form-container">
        <h2>Add New Advance Payment</h2>
        <div className="advance-payment-form">
          <div className="form-group">
            <div className="checkbox-label">
              <label>Customer Name</label>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isExistingCustomer}
                  onChange={handleCheckboxChange}
                />
                Existing Customer
              </label>
            </div>
            {isExistingCustomer ? (
              <select
                name="customerName"
                value={newPayment.customerName}
                onChange={handleInputChange}
              >
                <option value="">Select customer</option>
                {customers.map(customer => (
                  <option key={customer.id} value={customer.name}>
                    {customer.name}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name="customerName"
                placeholder="Enter customer name"
                value={newPayment.customerName}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="form-group">
            <label>Advance Amount</label>
            <input
              type="number"
              name="advanceAmount"
              placeholder="Enter amount"
              value={newPayment.advanceAmount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <select
              name="paymentMethod"
              value={newPayment.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
              <option value="Card">Card</option>
              <option value="Cheque">Cheque</option>
            </select>
          </div>
          <div className="form-buttons">
            <button className="add-btn" onClick={handleAddPayment}>
              Add Advance Payment
            </button>
          </div>
        </div>
      </div>

      <div className="advance-payment-list-container">
        <h2>Advance Payment Balances</h2>
        <div className="advance-payment-filter">
          <input
            type="text"
            placeholder="Search customer"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table className="advance-payment-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Advance Given</th>
              <th>Advance Used</th>
              <th>Balance</th>
              <th>Payment Method</th>
              <th>Bill</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>₹{customer.advanceGiven}</td>
                <td>₹{customer.advanceUsed}</td>
                <td>₹{customer.balance}</td>
                <td>{customer.paymentMethod}</td>
                <td>
                  <button
                    className="show-bills-btn"
                    onClick={() => handleShowBills(customer.bills, customer.paymentMethod, customer.name)}
                    disabled={customer.bills.length === 0}
                  >
                    Show Bills
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedBills && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              Close
            </button>
            <h2>Bill Details</h2>
            {selectedBills.bills.length === 0 ? (
              <p>No bills available for this customer.</p>
            ) : (
              selectedBills.bills.map(bill => (
                <div key={bill.billNo} className="bill-details">
                  <h3>Bill No: {bill.billNo}</h3>
                  <p>Date: {bill.date}</p>
                  <p>Payment Method: {selectedBills.customerPaymentMethod}</p>
                  <table className="bill-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price/Qty</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bill.items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.product}</td>
                          <td>{item.qty}</td>
                          <td>₹{item.pricePerQty}</td>
                          <td>₹{item.amount}</td>
                        </tr>
                      ))}
                      <tr className="total">
                        <td colSpan="3">Total Amount</td>
                        <td>₹{bill.totalAmount}</td>
                      </tr>
                      <tr className="total">
                        <td colSpan="3">Advance Remaining</td>
                        <td>₹{bill.advanceRemaining}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    className="print-btn"
                    onClick={() => handlePrintBill(bill, selectedBills.customerPaymentMethod, selectedBills.customerName)}
                  >
                    Print Bill
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancePayments;