import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "@mui/material/Alert";

type TeacherType = {
   id: number;
   title: titleEnum;
   nationalId: number;
   name: string;
   surname: string;
   dateOfBirth: string;
   teacherNumber: number;
   salary: string;
};

enum titleEnum {
   Mr = "Mr",
   Mrs = "Mrs",
    Miss = "Miss",
    Dr = "Dr",
   Prof = "Prof"
}

export default function TeacherForm({ closeTab }: any) {
   const queryClient = useQueryClient();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TeacherType>();

   const mutation = useMutation({
      mutationFn: (data: TeacherType) => {
         return fetch("http://localhost:3000/api/teacher", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         }).then((res) => {
            if (!res.ok) {
               throw new Error("Network response was not ok");
            }
            return res.json();
         });
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["teacherData"] });
         closeTab();
      },
      onError: () => {
         closeTab();
      },
   });

   const onSubmit: SubmitHandler<TeacherType> = (data) => {
      mutation.mutate(data);
   };

   return (
      <div className="px-1 w-[400px]">
         <p className="text-center font-bold my-7">
            Fill in your necessary Information.
         </p>

         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1 mt-4">
               <label className="font-[500]">National Id</label>
               <input
                  type="number"
                  {...register("nationalId", {
                     required: true,
                  })}
                  className="border h-10 rounded pl-4 focus:outline-none w-full"
                  placeholder="National Id"
               />
               {errors.nationalId && (
                  <span className="text-sm text-red-400 italic font-thin text-start">
                     This field is required
                  </span>
               )}
            </div>
            <div className="flex flex-col gap-1 mt-4">
               <label className="font-[500]">Title</label>
               <select
                  {...register("title", { required: true })}
                  className="border h-10 rounded pl-4 focus:outline-none"
               >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                  <option value="Prof">Prof</option>
               </select>

               {errors.name && (
                  <span className="text-sm text-red-400 italic font-thin text-start">
                     This field is required
                  </span>
               )}
            </div>
            <div className="flex flex-col gap-1 mt-4">
               <label className="font-[500]">Name</label>
               <input
                  {...register("name", { required: true })}
                  className="border h-10 rounded pl-4 focus:outline-none"
                  placeholder="Name"
               />
               {errors.name && (
                  <span className="text-sm text-red-400 italic font-thin text-start">
                     This field is required
                  </span>
               )}
            </div>

            <div className="flex flex-col gap-1 mt-4">
               <label className="font-[500]">Surname</label>
               <input
                  {...register("surname", { required: true })}
                  className="border h-10 rounded pl-4 focus:outline-none"
                  placeholder="Surname"
               />
               {errors.surname && (
                  <span className="text-sm text-red-400 italic font-thin text-start">
                     This field is required
                  </span>
               )}
            </div>
            <div className="flex flex-col gap-1 mt-4">
               <label className="font-[500]">Date of birth</label>
               <input
                  type="date"
                  max="2002-05-25"
                  {...register("dateOfBirth", { required: true })}
                  className="border h-10 rounded pl-4 focus:outline-none"
                  placeholder="Date of birth"
               />
               {errors.dateOfBirth && (
                  <span className="text-sm text-red-400 italic font-thin text-start">
                     This field is required
                  </span>
               )}
            </div>
            <div className="flex flex-col gap-1 mt-4">
               <label className="font-[500]">Teacher Number</label>
               <input
                  type="number"
                  {...register("teacherNumber", { required: true })}
                  className="border h-10 rounded pl-4 focus:outline-none"
                  placeholder="Teacher Number"
               />
               {errors.teacherNumber && (
                  <span className="text-sm text-red-400 italic font-thin text-start">
                     This field is required
                  </span>
               )}
            </div>
            <div className="flex flex-col gap-1 mt-4">
               <label className="font-[500]">Salary</label>
               <input
                  type="text"
                  {...register("salary", { required: false })}
                  className="border h-10 rounded pl-4 focus:outline-none"
                  placeholder="Salary"
               />
               {errors.teacherNumber && (
                  <span className="text-sm text-red-400 italic font-thin text-start">
                     This field is required
                  </span>
               )}
            </div>

            <button
               type="submit"
               className="py-2.5 px-5 me-2 mb-2 w-fit text-sm font-medium text-white  bg-gray-500  rounded-lg border border-gray-200 hover:bg-gray-100  hover:text-black mx-auto mt-8 "
            >
               Submit{" "}
            </button>
         </form>
      </div>
   );
}
