import TopNavigation from "./top-navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopNavigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
