import AccMenu from "@/components/AccMenu";
import Nav from "@/components/Nav";

export default function Dashboardlayout({ children }) {
  return (
    <div className="flex flex-row min-h-dvh">
      <div className="p-6">
        <AccMenu />
        <hr className="my-6 border-t border-[#4A4E69]"></hr>
        <Nav/>
      </div>
      <main className="flex-grow bg-slate-500">{children}</main>
    </div>
  );
}