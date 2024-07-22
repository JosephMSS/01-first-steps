import { Navbar } from "@/components";

export const metadata = {
  title: 'About',
  description: 'About',
};
export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo General</span>
        {children}
      </main>
    </>
  );
}