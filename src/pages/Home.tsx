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
  useEffect(() => {
    dispatch(fetchBills());
  }, [dispatch]);
  const handleOptionClick = (id: number) => {
    // Redirect to the bill page with the specified ID
    // window.location.href = `/bills/${id}`;
    // history.push('/');
    // <Link to={`/bill/${id}`} />;
    console.log('click');
  };

  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <div className='w-full max-w-sm p-4 rounded-lg shadow sm:p-6 bg-white'>
          <h5 className='mb-3 text-base font-semibold text-black md:text-xl'>
            Select Bill
          </h5>
          <p className='text-sm font-normal text-blac'>
            Connect with one of our available wallet providers or create a new
            one.
          </p>
          {bills?.map((bill) => (
            <ul className='my-4 space-y-3'>
              <li>
                <Link
                  to={`/bill/${bill.id}`}
                  className='flex items-center p-3 text-base font-bold text-black rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-[#D2E3C8] dark:hover:bg-[#B2C8BA]'
                >
                  <span className='flex-1 ms-3 whitespace-nowrap'>
                    Bill Due Date {bill.dueDate}
                  </span>
                  <span className='inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-black rounded dark:bg-[#86A789] '>
                    Amount {bill.amount}
                  </span>
                </Link>
              </li>
            </ul>
          ))}

          <div>
            <a
              href='#'
              className='inline-flex items-center text-xs font-normal text-black hover:underline'
            >
              <svg
                className='w-3 h-3 me-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
              Why using Payble?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
