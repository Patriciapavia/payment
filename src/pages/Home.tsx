import React from 'react';

type HomeProps = {
  datePick: string;
  amount: number;
};

const Home = ({ datePick, amount }: HomeProps) => {
  return (
    <div>
      {datePick}
      {amount}
    </div>
  );
};

export default Home;
