import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeDetails = () => {
  const [search, setSearch] = useState('');
  const [record, setRecord] = useState([]);

  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    salary: '',
  });

  // Object Destructuring
  const { fname, lname, email, phone, salary } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On Page load display all records

  const loadAllEmployeeDetails = async () => {
    var response = fetch('http://localhost:5000/api/v1/employee')
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        setRecord(myJson);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadAllEmployeeDetails();
  }, []);

  return <div></div>;
};

export default EmployeeDetails;
