interface PricingTabProps {
  frenquency: 'weekly' | 'fortnightly' | 'monthly';
  popular?: boolean;
  price: number;
  planDescription: string;
  onClick: () => void;
  disabled?: boolean;
}

function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full`}>
      <div className='relative flex flex-col h-full p-6 rounded-2xl bg-white shadow-md max-w-md '>
        <div className='mb-5'>
          <div className='inline-flex items-baseline mb-2'>
            <span className='text-black  font-bold text-3xl'>$</span>
            <span className=' font-bold text-4xl'>{props.price}</span>
            <span className='text-gray-800 font-medium'>
              /{props.frenquency}
            </span>
          </div>

          <div className='text-sm text-slate-800 mb-5'>
            {props.planDescription}
          </div>
          {/* <button
            disabled={props.disabled}
            onClick={props.onClick}
            className='w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-500 px-3.5 py-2.5 text-sm font-medium shadow-sm shadow-indigo-950/10 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Select

          </button> */}
          <div className='group flex relative'>
            {/* <span className='bg-red-400 text-white px-2 py-1'>Button</span> */}
            <button
              disabled={props.disabled}
              onClick={props.onClick}
              className='w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-500 px-3.5 py-2.5 text-sm font-medium shadow-sm shadow-indigo-950/10 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Select
            </button>
            {props.disabled && (
              <span
                className='group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute
  -translate-x-0 translate-y-full opacity-0 m-4 mx-auto'
              >
                Please select when you want your payment to start
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTab;
