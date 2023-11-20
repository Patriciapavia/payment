import React from 'react';
import { Link } from 'react-router-dom';

type FrequencyType = 'weekly' | 'fortnightly' | 'monthly';
type BillProps = {
  frequency: FrequencyType;
  amount: number;
};

const Bill = ({ amountDue }) => {
  return (
    <div>
      <Link to={`/bill/1`}>pay{amountDue}</Link>
      cbkacbfla
    </div>
  );
};

export default Bill;
