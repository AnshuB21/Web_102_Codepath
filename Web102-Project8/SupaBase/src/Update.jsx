import { useParams } from "react-router-dom";
import { useState } from "react";
export const Update = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    name: "",
    email: "",
    role: "",
  });
  const update = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("posts")
      .update({ name: post.name, email: post.email, role: post.role })
      .eq("id", id);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };
  return (
    <div>
      <form onSubmit={update}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          //   placeholder={}
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
