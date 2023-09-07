import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-5">
      <button
        className="btn btn-info"
        onClick={() => {
          navigate("/");
        }}
      >
        Home Page
      </button>
      <br />
      <h1 className="display-4">404</h1>
      <p className="lead">Page Not Found</p>
      <p>Sorry, the page you are looking for doesn't exist.</p>
    </div>
  );
};

export default Error;
