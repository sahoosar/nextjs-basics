import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';

  export default function Bars3BottomLeft() {
    return (
       <div className="flex h-10">
        <button className="flex items-center rounded-none hover:bg-sky-200 md:justify-start md:px-1">
            <Bars3BottomLeftIcon className="flex items-center h-10" />
            <div className="hidden md:block"></div>
          </button>
      </div>
    );
  }
  