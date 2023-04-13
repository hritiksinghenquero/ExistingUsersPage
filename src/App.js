import './App.css';
import React, { Component } from 'react';
import finzlogo from './finzlogo.png';

// Example of a data array that
// you might receive from an API
const data = [
{ SNo: "1", name: "Richard", accountid: "13424Richard", balance: "13000" },
{ SNo: "2", name: "Henry", accountid: "37575Henry", balance: "20000" },
{ SNo: "3", name: "Bob", accountid: "86387Bob", balance: "10000" },
{ SNo: "4", name: "Sam", accountid: "73875Sam", balance: "16000" },
{ SNo: "5", name: "Liu", accountid: "29101Liu", balance: "18000" },
{ SNo: "6", name: "John", accountid: "83872John", balance: "9000" },
{ SNo: "7", name: "Jim", accountid: "73872Jim", balance: "25000" },
{ SNo: "8", name: "Joy", accountid: "27832Joy", balance: "30000" },
{ SNo: "9", name: "Ross", accountid: "10239Ross", balance: "5000" },
{ SNo: "10", name: "Malek", accountid: "92093Malek", balance: "6800" },
]

function App() {
return (
	<div>
		<div class="header">{
			<header className="App-header">
				<img src={finzlogo} className="App-logo" alt="finzlogo" />
				<button className="b1">HOME</button>
				</header>
				}
</div>
	<div className="App">
	<table>
		<tr>
		<th>SNo</th>
		<th>name</th>
		<th>accountid</th>
		<th>balance</th>
		<th>Withdraw/Deposit</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.SNo}</td>
			<td>{val.name}</td>
			<td>{val.accountid}</td>
      <td>{val.balance}</td>
	  <button>Withdraw</button>
	  <button>Deposit</button>
			</tr>
		)
		})}
	</table>
	</div>
	</div>
);
}
export default App;