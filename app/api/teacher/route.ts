import { NextResponse, NextRequest } from "next/server";

type TeacherType = {
   id: number;
   title: string;
   nationalId: number;
   name: string;
   surname: string;
   dateOfBirth: string;
   teacherNumber: number;
   salary?: string;
};

let TeacherData: TeacherType[] = [
   {
      id: 1,
      nationalId: 23445342,
      title: "Mr",
      name: "Felix",
      surname: "Darien",
      dateOfBirth: "1996-07-2",
      teacherNumber: 342,
      salary: "$1000",
   },
];

export async function GET() {
   return NextResponse.json({ TeacherData });
}

export async function POST(req: NextRequest) {
   try {
      const {
         nationalId,
         name,
         surname,
         dateOfBirth,
         teacherNumber,
         title,
         salary,
      } = await req.json();

      for (let Teacher of TeacherData) {
         if (
            Teacher.teacherNumber === teacherNumber ||
            Teacher.nationalId === nationalId
         ) {
            return NextResponse.json(
               { error: "Teacher already exists" },
               { status: 400 }
            );
         }
      }

      const newTeacher: TeacherType = {
         id: TeacherData.length + 1,
         nationalId,
         name,
         surname,
         dateOfBirth,
         teacherNumber,
         title,
         salary,
      };

      TeacherData.push(newTeacher);

      return NextResponse.json(TeacherData);
   } catch (error) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
   }
}
