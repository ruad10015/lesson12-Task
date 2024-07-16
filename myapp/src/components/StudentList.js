import React, { useRef, useState } from "react";
import { deleteStudent } from "../services/api";

export default function StudentList({
    students,
    setCurrentStudent,
    fetchStudents,
}) {

    const selectedId = useRef();

    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchStudents();
    }

    const handleClick = (student) => {
        selectedId.current = student.id;
        setCurrentStudent(student);
    }

    return (
        <ul>
            {students.map((student) => (
                <li  key={student.id} style={{ color: selectedId.current == student.id ? "red" : "black", display: "flex", justifyContent: "center", marginTop: "30px" }}>
                    <h1>{student.name} {student.surname}  (Age:{student.age},Score:{student.score})</h1>
                    <button onClick={() => handleClick(student)}>Edit</button>
                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}