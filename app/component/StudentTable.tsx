"use client";
import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import StudentForm from "./StudentForm";
import { useQuery } from "@tanstack/react-query";

type StudentType = {
   id: number;
   nationalId: number;
   name: string;
   surname: string;
   dateOfBirth: string;
   studentNumber: number;
};
const style = {
   position: "absolute" as "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "fit-content",
   bgcolor: "background.paper",
   borderRadius: "4px",
   boxShadow: 24,
   p: 4,
};

const StudentTable = () => {
   const fetchStudentData = async () => {
      const response = await fetch("http://localhost:3000/api/student");
      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
   };

   const { isLoading, error, data } = useQuery({
      queryKey: ["studentData"],
      queryFn: fetchStudentData,
   });

   const [open, setOpen] = useState(false);
   const handleModal = () => {
      setOpen(!open);
   };

   const columns = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "nationalId", headerName: "National ID", width: 150 },
      { field: "name", headerName: "Name", width: 150 },
      { field: "surname", headerName: "Surname", width: 150 },
      { field: "dateOfBirth", headerName: "Date Of Birth", width: 150 },
      { field: "studentNumber", headerName: "Student Number", width: 150 },
   ];

   return (
      <div className="w-[100%] h-fit lg:px-40 px-14 ">
         <div className=" flex flex-col items-end">
            <button
               role="modal"
               onClick={handleModal}
               className="py-2.5 px-5 me-2 mb-2 w-fit text-sm font-medium text-white  bg-gray-500  rounded-lg border border-gray-200 hover:bg-gray-100  hover:text-black "
            >
               <p> Add a New Student</p>
            </button>
            <Modal
               open={open}
               onClose={handleModal}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
                  <StudentForm closeTab={handleModal} />
               </Box>
            </Modal>
         </div>

         {isLoading && (
            <p className="font-bold text-lg italic ml-12">Loading ........</p>
         )}
         <div className="w-[100%] mt-8 ">
            <DataGrid
               rows={data?.StudentData || []}
               columns={columns}
               pageSizeOptions={[5]}
               initialState={{
                  pagination: {
                     paginationModel: {
                        pageSize: 5,
                     },
                  },
               }}
            />
         </div>
      </div>
   );
};

export default StudentTable;
