import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import getResults from "../results/Results";
import { useQuery } from "@apollo/client";
import ResultsSliderModal from "../modal/ResultsSliderModal";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

const removeHTMLTags = (str) => {
  let doc = new DOMParser().parseFromString(str, "text/html");
  return doc.body.textContent || "";
};

function IndividualIntervalsCarousel() {
  const { loading, error, data } = useQuery(getResults);

  if (loading) return <p>Loading PARRIS results...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const results = data.results.edges.map((edge) => {
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

  return (
    <section id="carousel-section" className="carousel-section no-show-desktop">
      <Carousel className="container">
        {results.map((result, index) => (
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
}

function IndividualIntervalsCarouselWrapped() {
  return (
    <ErrorBoundary>
      <IndividualIntervalsCarousel />
    </ErrorBoundary>
  );
}

export default IndividualIntervalsCarouselWrapped;
