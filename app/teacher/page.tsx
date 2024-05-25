import Link from "next/link";
import React, { useEffect, useState } from "react";
import TeacherTable from "../component/TeacherTable";
const page = () => {
   return (
      <div>
         <div className="flex items-center max-w-full py-8 px-14 ">
            <div className="w-fit">
               <Link href="/">
                  <div className="rounded text-sm px-4 border py-2 bg-transparent hover:bg-slate-400 font-normal">
                     Back
                  </div>
               </Link>
            </div>
            <div className="w-full justify-center ">
               <p className="font-extrabold text-center text-3xl">
                  Teachers' List
               </p>
            </div>
         </div>
         <div className="mt-20 max-w-full mx-auto">
            <TeacherTable />{" "}
         </div>
      </div>
   );
};

export default page;
