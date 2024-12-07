import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <div className="mx-auto max-w-7xl p-6">{children}</div>
      </main>
    </>
  );
};

export default Layout;
