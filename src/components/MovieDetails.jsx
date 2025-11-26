import { Button, Card, Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(params);
  const endpoint = "http://www.omdbapi.com/?apikey=18f7c4ec&i=";
  let IMDBidToFetch = "tt0241527";
  const getDetails = function () {
    fetch(endpoint + IMDBidToFetch)
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error("errore nella response" + r.status);
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore", err);
        setError(true);
        setLoading(false);
      });
  };
  useEffect(() => {
    getDetails();
  });
  return (
    <Container>
      <title>Netflix - Dettagli del Film </title>
      <Row className="justify-content-center my-3">
        <Col xs={12} md={6} className="">
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="danger"></Spinner>
            </div>
          ) : (
            <>
              <Card bg="dark" text="white" className="my-3">
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>Anno : {movie.Year} </Card.Text>
                  <Card.Text>Durata : {movie.Runtime} </Card.Text>
                  <Card.Text>Trama : {movie.Plot} </Card.Text>
                  <Card.Text>Generi : {movie.Genre} </Card.Text>
                  <Card.Text>Regista : {movie.Director} </Card.Text>
                  <Card.Text>
                    Scrittori e Sceneggiatura : {movie.Writer}
                  </Card.Text>
                  <Card.Text>Attori/Attrici : {movie.Actors}</Card.Text>
                  <Card.Text>Paese/i : {movie.Country}</Card.Text>
                  <Card.Text>Premi : {movie.Awards}</Card.Text>
                  <Button variant="danger" className="fw-bold text-dark">
                    Guarda
                  </Button>
                </Card.Body>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
