import { useSelector } from 'react-redux';

import { billsSelector } from '../store/billsSlice';
import { useNavigate, useParams } from 'react-router-dom';

const Preview = () => {
  const navigate = useNavigate();

  const { bills } = useSelector(billsSelector);
  console.log(bills);
  const { billid, frequency } = useParams();
  // value.split('=')[1] //Right hand side
  const id = billid!.split('=')[1];
  const freq = frequency!.split('=')[1];
  const bill = bills.filter((x) => x.id === Number(id));
  const current = new Date();
  current.setDate(current.getDate() + 14);
  const numDatToAdd = 7;
  const countFrency = 1;
  const countForWeekly = 27;
  const dueDateArray = [];
  for (let i = 0; i < countForWeekly; i++) {
    current.setDate(current.getDate() + numDatToAdd);
    dueDateArray.push({
      dueDate: current.toDateString(),
      amount: Math.floor(bill[0].amount / numDatToAdd),
      status: 'Scheduled',
    });
  }
  console.log(dueDateArray);
  return (
    <div className='flex h-screen'>
      <div className='m-auto w-2/5'>
        <div className='my-6 mb-4 m-auto w-full p-4  bg-white border border-gray-200 rounded-lg'>
          <h1 className='font-bold'>Your schedule for #10943</h1>
          <p>
            You started the fortnightly plan on 20 Nov 2023and it will finish on
            31 May 2024. There are 14 payments remaining.
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='grid grid-cols-3 divide-x text-gray-900 w-2/5 bg-white hover:bg-slate-100 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500 me-2 mb-2'>
            <svg
              onClick={() => navigate('/')}
              className='col-span-1 w-6 h-6 me-2 -ms-1 text-[#626890]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
              <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
            </svg>
            <span onClick={() => navigate(-1)} className='col-span-2'>
              {' '}
              Payment Plans
            </span>
          </div>

          <select
            disabled
            id=''
            className='text-gray-900 w-1/5bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500 me-2 mb-2 flex justify-between '
          >
            <option selected>Options</option>
            <option value=''></option>
          </select>
        </div>

        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left rtl:text-right table-auto '>
            <thead className='text-xs text-black uppercase bg-white'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Due Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Amount
                </th>
                <th scope='col' className='px-6 py-3'>
                  Status
                </th>

                <th scope='col' className='px-6 py-3'>
                  Actioned
                </th>
              </tr>
            </thead>
            <tbody>
              {dueDateArray.map((item) => (
                <tr className=''>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white'
                  >
                    {item.dueDate}
                  </th>
                  <td className='px-6 py-4 bg-white'>{item.amount}</td>
                  <td className='px-6 py-4 bg-white '>
                    <span className='rounded-full border py-1 px-2'>
                      {item.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 bg-white'></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='my-6 mb-4 m-auto w-full p-4  text-slate-800 bg-white border border-gray-200 rounded-lg'>
          <p>
            Your flexible payment plan will automatically roll-over into future
            billing periods. We'll send an SMS before anu roll-over
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
