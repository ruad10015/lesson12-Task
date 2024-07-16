import React, { useEffect, useState } from "react";
import { getStudents } from "../services/api";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

export default function Home() {
    const [students, setStudents] = useState([]);
    const [currentStudent, setCurrentStudent] = useState(null);

    const fetchStudents = async () => {
        const response = await getStudents();
        setStudents(response.data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);
    return (
        <div>
            <h1>Student App</h1>
            <StudentForm
                currentStudent={currentStudent}
                setCurrentStudent={setCurrentStudent}
                fetchStudents={fetchStudents}
            ></StudentForm>

            <section>
                <StudentList
                    students={students}
                    setCurrentStudent={setCurrentStudent}
                    fetchStudents={fetchStudents}
                ></StudentList>

            </section>
        </div>
    );
}