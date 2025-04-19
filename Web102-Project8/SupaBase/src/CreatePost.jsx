import React, { useState } from "react";
import { supabase } from "./client";
import "./create.css";

export const CreatePost = () => {
  const [post, setPost] = useState({
    name: "",
    email: "",
    role: "",
  });
  //havenn't used
  const roles = [
    "Intern",
    "Volunteer",
    "Founder member",
    "visitor",
    "Interested",
    "Other",
  ];
  //when submitting the form, it will call this function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const createPost = async (event) => {
    event.preventDefault();
    // Probably this line  is not needed, need to check
    const { name, email, role } = post;
    const { data, error } = await supabase
      .from("posts")
      .insert({ name, email, role })
      .select();

    if (error) {
      console.error("Insert error:", error);
    } else {
      console.log();
    }

    // Optionally clear the form
    setPost({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={createPost}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={post.name}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={post.email}
          required
        />
        <br />
        <label htmlFor="role">Role:</label>
        <select name="role" id="role" value={post.role} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Founder">Founder</option>
          <option value="Others">Others</option>
        </select>

        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};
