import image from "./Image.png";
import "./Home.css"; // Make sure this file exists

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the registration for the NGO</h1>
      <img src={image} alt="NGO" className="home-image" />
      <h2>Register your details</h2>
      <p>Click on the Create button to register your details</p>
    </div>
  );
};
