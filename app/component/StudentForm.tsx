import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
   example: string;
   exampleRequired: string;
};
type StudentType = {
   nationalId: string;
   name: string;
   surname: string;
   dateOfBirth: string;
   studentNumber: string;
};

export default function StudentForm({closeTab}:any) {
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
   });

   const onSubmit: SubmitHandler<StudentType> = (data) => {
      mutation.mutate(data);

   };
    
    

   return (
      <div className="p">
         <form onSubmit={handleSubmit(onSubmit)}>
            <label>nationalId</label>
            <input
               {...register("nationalId", { required: true })}
               className="border"
            />
            {errors.nationalId && <span>This field is required</span>}
            <label>name</label>
            <input
               {...register("name", { required: true })}
               className="border"
            />
            {errors.name && <span>This field is required</span>}
            <label>surname</label>
            <input
               {...register("surname", { required: true })}
               className="border"
            />
            {errors.surname && <span>This field is required</span>}
            <label>Date of birth</label>
            <input
               {...register("dateOfBirth", { required: true })}
               className="border"
            />
            {errors.dateOfBirth && <span>This field is required</span>}
            <label>studentNumber</label>
            <input
               {...register("studentNumber", { required: true })}
               className="border"
            />
            {errors.studentNumber && <span>This field is required</span>}

            <button type="submit" className="border">
               Submit{" "}
            </button>
         </form>
      </div>
   );
}
