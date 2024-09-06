"use client";

import Pagina from "../components/Pagina";
import { useEffect, useState } from "react";
import apiMovie from "../services/apiMovies";
import { Card, Col, Row } from "react-bootstrap";

export default function Page() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    apiMovie.get("movie/popular").then((resultado) => {
      setFilmes(resultado.data.results);
    });
  }, []);

  return (
    <Pagina titulo="Filmes">
      <Row md={4}>
        {filmes.map((item) => (
          <Col key={item.id} className="mt-3">
            <Card>
              <Card.Img height={150} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filmes.map((item) => (
        <p>{item.title}</p>
      ))}
    </Pagina>
  );
}
