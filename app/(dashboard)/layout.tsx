import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div>{/* <Sidebar/> */}</div>
      <main>
        <UserButton afterSignOutUrl="/" />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
