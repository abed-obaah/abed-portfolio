import Footer from "./footer";
import TopNavigation from "./top-navigation";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <TopNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
