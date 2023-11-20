import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bill from './Bill';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../store/store';
import { billsSelector, fetchBills } from '../store/billsSlice';
// type HomeProps = {
//   datePick: string;
//   amount: number;
// };

const Home = () => {
  const dispatch = useAppDispatch();
  const { bills, loading, hasErrors } = useSelector(billsSelector);
  console.log(bills);
  useEffect(() => {
    dispatch(fetchBills());
  }, [dispatch]);

  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <select>
          {bills?.map((option) => (
            <>
              <option value={option.dueDate}>
                {option.dueDate}
                <h1>amount due{option.amount}</h1>
              </option>
            </>
          ))}
        </select>
        {/* <Link to={`/bill/1`}>pay{amountDue}</Link> */}
        {/* <Datepicker
          toggleClassName='absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed'
          placeholder={'Select date'}
          popoverDirection='up'
          asSingle={true}
          primaryColor={'fuchsia'}
          value={value}
          onChange={handleValueChange}
          displayFormat={'DD/MM/YYYY'}
        />

        {hasDateSelected && (
          <div>
            <h1>Amount {amountDue}</h1>
            <Bill amountDue={amountDue} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Home;
