import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../../component/common/Search";

const StudentView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/student/all");
    setStudents(result.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/student/delete/${id}`);
    loadStudents();
  };

  return (
    <section>
      <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Name</th>
            <th>F'Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>Contact</th>
            <th>Address</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students
            .filter((st) => st.name.toLowerCase().includes(search))
            .map((student, index) => (
              <tr key={student.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.name}</td>
                <td>{student.fname}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.grade}</td>
                <td>{student.contact}</td>
                <td>{student.address}</td>
                <td className="mx-2">
                  <Link
                    to={`/student-profile/${student.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-student/${student.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    to={`/delete-student/${student.id}`}
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentView;
