import SideNav from '@/app/ui/dashboard/sidenav';
import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';
import DbLogo from '@/app/ui/dashboard/db-logo';
import Bars3BottomLeft from '@/app/ui/dashboard/bars3-buttomleft';
import SignOut from '@/app/ui/dashboard/signout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <main>
    
    <div className="flex rounded-none bg-blue-500 max-w-full">
      {/*<AcmeLogo /> */}
      <div className="flex h-10">
        <DbLogo/>
      </div>
      <div className="flex h-10 pr-96">
         <Bars3BottomLeft/> 
      </div>
      <div className="flex h-10 pr-80">
      </div>
      <div className="flex h-10 pr-80">
      </div>
      <div className="flex h-10 pl-96">
        <SignOut/>
      </div>
   </div>
    
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>

    </main>
  );
}