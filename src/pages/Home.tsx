import React from 'react';

type HomeProps = {
  datePick: string;
  amount: number;
};

const Home = ({ datePick, amount }: HomeProps) => {
  return (
    <div>
      <h1 className='text-red-500'>hello world</h1>
      {datePick}
      {amount}
    </div>
  );
};

export default Home;
