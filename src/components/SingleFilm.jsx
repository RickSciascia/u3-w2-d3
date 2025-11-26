import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const SingleFilm = function (props) {
  const navigate = useNavigate();

  return (
    <Col className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 text-center px-1">
      <img
        width="auto"
        height="250px"
        src={props.singleElement.Poster}
        alt={`Poster di ${props.singleElement.Title}`}
        onClick={() => {
          navigate(`/details/${props.singleElement.imdbID}`);
        }}
      />
    </Col>
  );
};

export default SingleFilm;
