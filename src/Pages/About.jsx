import { useNavigate } from "react-router-dom";
export const About = () => {
    const navigate = useNavigate();
    const homePage=()=>{
        return navigate("/")
    }
    return <div className="container mt-5">
    <h1>About Us</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
      finibus purus.
    </p>
    <button className="btn btn-info" onClick={homePage}>Home</button>
  </div>
  };
  