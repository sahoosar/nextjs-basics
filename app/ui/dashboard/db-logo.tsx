import { lusitana } from '@/app/ui/fonts';

  export default function DbLogo() {
    return (
 
       <div className={'${lusitana.className} flex flex-row items-center leading-none text-white'}>
         <img src="/db_img.png" className="flex items-center h-10 p-1" alt="Deutsche bank image" />
         <p className="mb-0 text-center text-[20px] p-2">Deutsche Bank</p>
      </div>
    );
  }
  