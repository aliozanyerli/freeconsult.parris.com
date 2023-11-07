import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import getResults from "../results/Results";
import { useQuery } from "@apollo/client";

const ResultsSliderModal = lazy(() => import("../modal/ResultsSliderModal"));

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const getDerivedStateFromError = useCallback(() => {
    setHasError(true);
  }, []);

  useEffect(() => {}, []);

  if (hasError) {
    return <h2>Something went wrong.</h2>;
  }

  return children;
}

const removeHTMLTags = (str) => {
  let doc = new DOMParser().parseFromString(str, "text/html");
  return doc.body.textContent || "";
};

const IndividualIntervalsCarousel = React.memo(() => {
  const { loading, error, data } = useQuery(getResults);

  const results = React.useMemo(() => {
    return data?.results.edges.map((edge) => {
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
  }, [data]);

  if (loading) return <></>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="carousel-section" className="carousel-section no-show-desktop">
      <Carousel className="container">
        {results?.map((result, index) => (
          <Carousel.Item key={index}>
            <Carousel.Caption>
              <h2>{result.title}</h2>
              <p>{result.excerpt}</p>
              <Suspense fallback={<div>Loading...</div>}>
                <ResultsSliderModal result={result} />
              </Suspense>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
});

// Wrap the carousel in the error boundary
function IndividualIntervalsCarouselWrapped() {
  return (
    <ErrorBoundary>
      <IndividualIntervalsCarousel />
    </ErrorBoundary>
  );
}

export default IndividualIntervalsCarouselWrapped;
