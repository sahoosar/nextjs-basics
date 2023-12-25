import { PowerIcon } from '@heroicons/react/24/outline';

  export default function SignOut() {
    return (
     <div className="flex text-white h-10">
        
        <form>
          <button className="flex items-center justify-center gap-2 rounded-none p-1 font-medium  hover:bg-sky-200 hover:text-blue-600 md:justify-start">
            <PowerIcon className="flex items-center text-red-500 h-8 w-8" />
            <div className="hidden md:block text-center">Sign Out</div>
          </button>
        </form>
      
      </div>
    );
  }