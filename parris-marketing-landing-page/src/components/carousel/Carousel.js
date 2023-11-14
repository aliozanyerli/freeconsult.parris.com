import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import getResults from "../results/Results";
import { useQuery } from "@apollo/client";
import ResultsSliderModal from "../modal/ResultsSliderModal.js";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = React.useState(false);

  const getDerivedStateFromError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <h2>Something went wrong.</h2>;
  }

  return children;
}

const removeHTMLTags = (str) => {
  let doc = new DOMParser().parseFromString(str, "text/html");
  return doc.body.textContent || "";
};

const IndividualIntervalsCarousel = () => {
  const { error, data } = useQuery(getResults);

  // Fallback content while waiting for data
  if (!data) {
    return (
      <section
        id="carousel-section"
        className="carousel-section no-show-desktop"
      >
        <Carousel className="container p-4">
          <Carousel.Caption>
            <p>Loading...</p>
          </Carousel.Caption>
        </Carousel>
      </section>
    );
  }

  const results = data?.results.edges.map((edge) => {
    const { node } = edge;
    return {
      title: node.title,
      excerpt: removeHTMLTags(node.excerpt),
      content: removeHTMLTags(node.content),
      hasVerdict: node.resultsSettings.hasVerdict,
      categories:
        node.categories.edges.length > 0
          ? node.categories.edges[0].node.name
          : null,
      menuOrder: node.menuOrder,
    };
  });

  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="carousel-section" className="carousel-section no-show-desktop">
      <Carousel className="container">
        {results?.map((result, index) => (
          <Carousel.Item key={index}>
            <Carousel.Caption>
              <h2>{result.title}</h2>
              <p>{result.excerpt}</p>
              <ResultsSliderModal result={result} />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

function IndividualIntervalsCarouselWrapped() {
  return (
    <ErrorBoundary>
      <IndividualIntervalsCarousel />
    </ErrorBoundary>
  );
}

export default IndividualIntervalsCarouselWrapped;
