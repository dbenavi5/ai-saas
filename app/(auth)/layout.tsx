const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#2c0f12] flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
