import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Student() {
  const params = useParams();
  const [data, setData] = useState({});
  console.log(params.id);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3001/student?usn=${params.id}`
      );
      console.log(res);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="name">Name:{data.name}</h1>
      <h1 className="usn">USN:{data.usn}</h1>
    </div>
  );
}

export default Student;
