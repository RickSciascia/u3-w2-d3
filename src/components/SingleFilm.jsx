import { Col } from "react-bootstrap";

const SingleFilm = function (props) {
  return (
    <Col className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 text-center px-1">
      <img
        width="auto"
        height="250px"
        src={props.singleElement.Poster}
        alt={`Poster di ${props.singleElement.Title}`}
      />
    </Col>
  );
};

export default SingleFilm;
