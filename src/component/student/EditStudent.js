import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    name: "",
    fname: "",
    dob: "",
    gender: "",
    grade: "",
    contact: "",
    address: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student/${id}`);
    setStudent(result.data);
  };

  const { name, fname, dob, gender, grade, contact, address } = student;

  const handleInputChage = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const updateStudent = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/student/update/${id}`, student);
    navigate("/view-students");
  };

  return (
    <div className="cool-sm-8 py-2 px-5">
      <h2 className="mt-5">Edit Student</h2>
      <form onSubmit={(e) => updateStudent(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="name">
            Student Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => handleInputChage(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="fname">
            Father Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="fname"
            id="fname"
            required
            value={fname}
            onChange={(e) => handleInputChage(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="dob">
            DOB
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            name="dob"
            id="dob"
            required
            value={dob}
            onChange={(e) => handleInputChage(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="gender">
            Gender
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="gender"
            id="gender"
            required
            value={gender}
            onChange={(e) => handleInputChage(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="grade">
            Grade
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="grade"
            id="grade"
            required
            value={grade}
            onChange={(e) => handleInputChage(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="contact">
            Contact
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="contact"
            id="contact"
            required
            value={contact}
            onChange={(e) => handleInputChage(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="address">
            Address
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="address"
            id="address"
            required
            value={address}
            onChange={(e) => handleInputChage(e)}
          />
        </div>
        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Update
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/view-students"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
