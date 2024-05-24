
import Link from "next/link";
import React, { useEffect, useState } from "react";
import StudentForm from "../../component/StudentForm";

const page = () => {

   return (
      <div>
         <div className="flex">
            <Link href="/">
               <div className="rounded text-sm px-4 border py-2 bg-transparent hover:bg-slate-400 font-normal">
                  Back
               </div>
            </Link>

            <p className="font-extrabold text-center">Student List</p>
            <div className="mt-20">
               <StudentForm  />{" "}
            </div>
         </div>
      </div>
   );
};

export default page;
