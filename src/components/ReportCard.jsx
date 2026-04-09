import React from "react";
function ReportCard(){
    //step1: Data (Array of objects)
    const students = [
        {id:1 , sname:'Deepanshu' , marks:75},
        {id:2 , sname:'Diya' , marks:100},
        {id:3 , sname:'Raj' , marks:58},
        {id:3 , sname:'Hemant' , marks:4},
        {id:3 , sname:'Neha' , marks:69}
    ]
    return (
        <div className="min-h-screen bg-grey-400 p-6 ">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
                    Student's Result
                </h2>
                {/* List Rendering */}
                <ul className="space-y-3">
                    {
                        students.map((student)=>(
                            <li key={student.id} className="flex justify-between items-center border p-3 rounded">
                                {/* Student name */}
                                <div>
                                    <span className="text-gray-800 font-medium">
                                        {student.sname}
                                    </span>

                                    {/* Topper Batch */}
                                    {
                                        student.marks > 70 && (
                                            <span className="ml-3 text-sm text-blue-600">
                                                (Topper)
                                            </span>
                                        )
                                    }
                                </div>
                                {/* conditional rendering(pass/fail) */}
                                <span className={student.marks >= 40 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                                    {
                                        student.marks>=40
                                        ?'Pass'
                                        :'Fail'
                                    }
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default ReportCard