import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <main className="flex  m-0 p-0 min-h-screen">
        <div className="flex-1 bg-cyan-100 max-h-full px-20 flex flex-col justify-center items-center ">
           <p className="text-4xl text-black font-black font-serif text-center ">
              Welcome to the University Registry Portal
           </p>
           <p className="font-light text-sm text-gray-500 text-center mt-12">
              {" "}
              ...All student and teachers are registered here, if you are new
              click on the designated button on your right and fill the
              necessary form{" "}
           </p>
        </div>
        <div className="flex-1 max-h-full bg-cyan-900 flex flex-col justify-center items-center gap-10">
           <Link href="/teacher">
              <div className="rounded px-10 py-3 bg-slate-800 hover:bg-slate-400 font-extrabold text-white">
                 Teacher List
              </div>
           </Link>
           <Link href="/student">
              <div className="rounded px-10 py-3 bg-slate-800 hover:bg-slate-400 font-extrabold text-white">
                 Student List
              </div>
           </Link>
        </div>
     </main>
  );
}
