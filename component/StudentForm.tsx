import React, { useEffect, useState } from "react";

const StudentForm = () => {
   const [students, setStudents] = useState<any>([]);
   useEffect(() => {
      const fetchStudents = async () => {
         const response = await fetch("http://localhost:3000/api/student");
         const data = await response.json();
         setStudents(data.StudentData);
      };

      fetchStudents();
   }, []);
   return (
      <div className="overflow-x-auto">
         <table className="min-w-full bg-white border border-gray-200">
            <thead>
               <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                     National ID
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                     Name
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                     Surname
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                     Date of Birth
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                     Student Number
                  </th>
               </tr>
            </thead>
            <tbody>
               {students.map((student, index) => (
                  <tr key={index}>
                     <td className="py-2 px-4 border-b border-gray-200">
                        {student.nationalId}
                     </td>
                     <td className="py-2 px-4 border-b border-gray-200">
                        {student.name}
                     </td>
                     <td className="py-2 px-4 border-b border-gray-200">
                        {student.surname}
                     </td>
                     <td className="py-2 px-4 border-b border-gray-200">
                        {student.dateOfBirth}
                     </td>
                     <td className="py-2 px-4 border-b border-gray-200">
                        {student.studentNumber}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default StudentForm;
