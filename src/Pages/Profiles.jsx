import { useParams, Link, useNavigate } from "react-router-dom";
export const Profiles = () => {
  const navigate = useNavigate();
  const { name, id } = useParams();
  return (
    <div>
      <p>
        Put Your Name Instead Of Hossein And 121:{" "}
        <Link to="http://localhost:3000/profile/Hossein/121">
          http://localhost:3000/profile/Hossein/121
        </Link>
      </p>
      Profile Page Of {name}, {id}
      <br />
      <button
        className="btn btn-success"
        onClick={() => {
          navigate("/");
        }}
      >
        HomePage
      </button>
    </div>
  );
};
