import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "@mui/material/Alert";

type StudentType = {
   nationalId: number;
   name: string;
   surname: string;
   dateOfBirth: string;
   studentNumber: number;
};

export default function StudentForm({ closeTab }: any) {
   const queryClient = useQueryClient();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<StudentType>();

   const mutation = useMutation({
      mutationFn: (data: StudentType) => {
         return fetch("http://localhost:3000/api/student", {
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
         queryClient.invalidateQueries({ queryKey: ["studentData"] });
         closeTab();
      },
      onError: () => {
         closeTab();
      },
   });

   const onSubmit: SubmitHandler<StudentType> = (data) => {
      mutation.mutate(data);
   };

   return (
      <div className="px-1 w-[400px]">
         <p className="text-center font-bold my-7">
            Fill in your necessary Information.
         </p>

         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1 mt-4">
               <label htmlFor="nationalId" className="font-[500]">
                  National Id
               </label>
               <input
                  id="nationalId"
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
               <label htmlFor="name" className="font-[500]">
                  Name
               </label>
               <input
                  id="name"
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
               <label htmlFor="surname" className="font-[500]">
                  Surname
               </label>
               <input
                  id="surname"
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
               <label htmlFor="date_of_birth" className="font-[500]">
                  Date of birth
               </label>
               <input
                  id="date_of_birth"
                  type="date"
                  min="2002-05-25"
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
               <label htmlFor="student_number" className="font-[500]">
                  Student Number
               </label>
               <input
                  id="student_number"
                  type="number"
                  {...register("studentNumber", { required: true })}
                  className="border h-10 rounded pl-4 focus:outline-none"
                  placeholder="Student Number"
               />
               {errors.studentNumber && (
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
