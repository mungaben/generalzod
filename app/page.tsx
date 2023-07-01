import REgisterUser from "@/components/REgisterUser";
import Tbaleava from "@/components/Tbaleava";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen ">
      <h1>General Zod</h1>
      <div className="h-full">
        <div className="text-black bg-white">
          <Tbaleava />
        </div>
        <div>
          <REgisterUser />
        </div>
      </div>
    </main>
  );
}
