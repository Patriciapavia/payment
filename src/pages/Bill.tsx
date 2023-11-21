import { useState } from 'react';
import { billsSelector } from '../store/billsSlice';
import { useParams } from 'react-router-dom';
import Datepicker from 'react-tailwindcss-datepicker';
import PricingTab from '../components/pricingTab/pricingTab';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type FrequencyType = 'weekly' | 'fortnightly' | 'monthly';

const Bill = () => {
  const { id } = useParams();
  const { bills } = useSelector(billsSelector);
  const bill = bills.filter((x) => x.id === Number(id));
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };
  const navigate = useNavigate();

  const handleSetupPaymentClick = (id: number, frenquency: string) => {
    navigate(`/preview-plan/id=${id}/frequency=${frenquency}`);
  };

  return (
    <div className='flex h-screen'>
      {bill.map((b) => (
        <div className='m-auto'>
          <div className='m-auto w-4/5 pt-6 pb-2 text-center'>
            <h5 className='text-3xl font-bold text-black'>
              Great, which plan suits you?
            </h5>
            <p className='mb-4 text-base text-slate-800 sm:text-lg'>
              Choose the flexible payment plan that suits you best. Remember,
              there's no extra fees for paying flexibly. You'll enter your
              payment details on the next page.
            </p>
            <p>
              Your flexible payment plan will automatically roll-over into
              future billing periods. We'll send an SMS before any roll-over and
              you can always cancel at any time.
            </p>
            <div className='py-4'>
              <h5 className='font-bold'>Choose when payments will start</h5>
              <div className='max-w-[290px] m-auto'>
                <Datepicker
                  asSingle={true}
                  value={value}
                  onChange={handleValueChange}
                />
              </div>
            </div>
          </div>

          {/* Pricing toggle */}

          <div className='max-w-md mx-auto grid grid-cols-1 gap-4 py-2 my-3'>
            {/* Pricing tab 1 */}

            <PricingTab
              onClick={() => handleSetupPaymentClick(b.id, 'weekly')}
              frenquency='weekly'
              price={Math.floor(b.amount / 27)}
              planDescription={`27 weekly payments of $${Math.floor(
                b.amount / 27
              )} each, and a final payment of $${b.amount}`}
            />

            {/* Pricing tab 2 */}
            <PricingTab
              onClick={() => handleSetupPaymentClick(b.id, 'fortnightly')}
              frenquency='fortnightly'
              popular={true}
              price={Math.floor(b.amount / 13)}
              planDescription={`13 fortnightly payments of $${Math.floor(
                b.amount / 13
              )} each, and a final payment of $${b.amount}`}
            />

            {/* Pricing tab 3 */}
            <PricingTab
              onClick={() => handleSetupPaymentClick(b.id, 'monthly')}
              frenquency='monthly'
              price={Math.floor(b.amount / 6)}
              planDescription={`6 monthly payments of $${Math.floor(
                b.amount / 6
              )} each, and a final payment of $${b.amount}`}
            />
            <button
              onClick={() => navigate('/')}
              className='w-full text-blue-500'
            >
              Back
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bill;
