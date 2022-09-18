import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [post, getPost] = useState([])
  const API = 'http://localhost:8000/api/attendance/list';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getPost(res.data)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <div className="App px-[30px]">
      <h2 className="text-gray-900 mt-[50px] text-[40px]">Attendance information</h2>
      <div className="overflow-x-auto px-[30px] w-full p-4 bg-white shadow-lg rounded-sm border border-gray-200 mt-5">
        <table className="table-auto w-full">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Employee Name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Check In</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Check Out</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Total Working Hours</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {post.map((item, index):any => (
               <tr key={index}><td className="p-2 whitespace-nowrap">{item['employee_name']}</td>
                <td className="p-2 whitespace-nowrap">{item['check_in']}</td>
                <td className="p-2 whitespace-nowrap">{item['check_out']}</td>
                <td className="p-2 whitespace-nowrap">{item['total_working_hours']}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
