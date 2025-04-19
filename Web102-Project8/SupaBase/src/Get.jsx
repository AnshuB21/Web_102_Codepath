import { supabase } from "./client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Update } from "./Update";
export const Get = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    getRequest();
  }, []);
  const getRequest = async (event) => {
    const { data, error } = await supabase.from("posts").select("*");
    setData(data);
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      console.log();
    }
  };

  return (
    <>
      <div className="get-container">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          data.map((item) => (
            <div className="crewmate-card" key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <p>{item.role}</p>
              <Link to={`/update/${item.id}`}>Edit Crewmate</Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};
