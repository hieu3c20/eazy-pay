import { React, useState, useEffect } from "react";
import "./style.scss";
import Transaction from '../../components/childComponents/Transaction'
export default () => {
  return (
    <div className="ViewTransaction">
      <div className="search-and-filter-container">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search by name or email" />
          <i className="fa-solid fa-xmark remove-text-btn"></i>        </div>

        <div className="filter-box">
          <p className='filter-item filter-item-selected'>Date: Last 90 days</p>
          <p className='filter-item'>Type</p>
          <p className='filter-item'>Status</p>
        </div>
      </div>
      <div className="transaction-container">
        <p className="status-text">Completed</p>

        <div className="this-days transaction-group">
          <p className="time-text">This week</p>

          <Transaction
            imageUrl={"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}
            name={"John Doe"}
            time={"18:30:20 Jun 30"}
            amount={"20.5"}
          />


          <Transaction
            imageUrl={"https://images.unsplash.com/photo-1603483080228-04f2313d9f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"}
            name={"Ho Van Hieu"}
            time={"12:25:52 Jun 29"}
            amount={"5.5"}
          />


          <Transaction
            imageUrl={"https://images.unsplash.com/photo-1568602562958-75fa1a44ab44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyYWdvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"}
            name={"Vu"}
            time={"10:20:05 Jun 23"}
            amount={"100.5"}
          />
        </div>

        <div className="transaction-group">
          <p className="time-text">June</p>

          <Transaction
            imageUrl={"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}
            name={"John Doe"}
            time={"18:30:20 Jun 30"}
            amount={"20.5"}
          />
        </div>

        <div className="transaction-group">
          <p className="time-text">May</p>

          <Transaction
            imageUrl={"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}
            name={"John Doe"}
            time={"18:30:20 Jun 30"}
            amount={"20.5"}
          />
        </div>

      </div>
    </div>
  )
}