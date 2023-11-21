interface PricingTabProps {
  isSelect: boolean;
  frenquency: 'weekly' | 'fortnightly' | 'monthly';
  popular?: boolean;
  price: number;
  planDescription: string;
  onClick: () => void;
}

function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full`}>
      <div className='relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-white border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5'>
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
          <button
            onClick={props.onClick}
            className='w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#D2E3C8] px-3.5 py-2.5 text-sm font-medium shadow-sm shadow-indigo-950/10 hover:bg-[#86A789] focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150'
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingTab;
