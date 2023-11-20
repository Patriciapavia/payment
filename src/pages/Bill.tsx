import React from 'react';

type FrequencyType = 'weekly' | 'fortnightly' | 'monthly';
type BillProps = {
  frequency: FrequencyType;
  amount: number;
};

const Bill = ({ frequency, amount }: BillProps) => {
  return (
    <div>
      {frequency}, {amount}
    </div>
  );
};

export default Bill;
