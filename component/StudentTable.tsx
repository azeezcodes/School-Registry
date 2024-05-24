"use client";
import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import StudentForm from "./StudentForm";
import { useQuery } from "@tanstack/react-query";

type StudentType = {
   id: number;
   nationalId: string;
   name: string;
   surname: string;
   dateOfBirth: string;
   studentNumber: string;
};
const style = {
   position: "absolute" as "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

const StudentTable = () => {

 const fetchStudentData = async () => {
    const response = await fetch("http://localhost:3000/api/student");
    if (!response.ok) {
       throw new Error("Network response was not ok");
    }
    return response.json();
 };


   
   const { isLoading, error, data } = useQuery({
      queryKey: ["studentData"],
      queryFn: () =>{fetchStudentData()}
      
   });

   console.log(data, 'gggggggggg')

     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
   const columns = [
      { field: "id", headerName: "ID" },
      { field: "nationalId", headerName: "National ID" },
      { field: "name", headerName: "Name" },
      { field: "surname", headerName: "Surname" },
      { field: "dateOfBirth", headerName: "Date Of Birth" },
      { field: "studentNumber", headerName: "Student Number" },
   ];

   return (
      <div className="p-2">
         <div className="modal">
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
                  <StudentForm />
               </Box>
            </Modal>
         </div>
         <div className="table">
            {/* <DataGrid rows={data} columns={columns} /> */}
         </div>
      </div>
   );
};

export default StudentTable;
