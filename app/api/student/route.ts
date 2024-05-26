import { NextResponse, NextRequest } from "next/server";

type StudentType = {
   id: number;
   nationalId: number;
   name: string;
   surname: string;
   dateOfBirth: string;
   studentNumber: number;
};

let StudentData: StudentType[] = [
   {
      id: 1,
      nationalId: 23445342,
      name: "Jack",
      surname: "Adelana",
      dateOfBirth: "2008-07-3",
      studentNumber: 342,
   },
];

export async function GET() {
   return NextResponse.json( {StudentData} );
}

export async function POST(req: NextRequest) {
   try {
      const { nationalId, name, surname, dateOfBirth, studentNumber } =
         await req.json();

      for (let student of StudentData) {
         if (
            student.studentNumber === studentNumber ||
            student.nationalId === nationalId
         ) {
            return NextResponse.json(
               { error: "Student already exists" },
               { status: 400 }
            );
         }
      }

      const newStudent: StudentType = {
           id: StudentData.length + 1,
         nationalId,
         name,
         surname,
         dateOfBirth,
         studentNumber,
      };

      StudentData.push(newStudent);

      return NextResponse.json(StudentData);
   } catch (error) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
   }
}
