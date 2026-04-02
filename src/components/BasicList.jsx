function BasicList(){
    const students = ['Deepanshu','Raj','Hemant','Keshav']

    return (
        <div className="min-h-screen bg-gray-600
        p-6">
           <div className="max-w-md mx-auto bg-white p-6
           rounded-lg shadow-md">
                <h2 className="text-x1 font-bold mb-4
                text-blue-600">
                    Student List
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                    {students.map((student , index)=>(
                            <li key={index}>{student}</li>
                    ))}
                </ul>
           </div>
        </div>
    )
}

export default BasicList