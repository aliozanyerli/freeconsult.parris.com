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
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
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

  if (loading)
    return <p style={{ display: "none" }}>Loading PARRIS results...</p>;
  if (error) return <p>PARRIS Case Results: {error.message}</p>;

  const results = data.results.edges.map((result) => {
    console.log(result.node);
    return {
      title: result.node.title,
      excerpt: removeHTMLTags(result.node.excerpt),
      content: removeHTMLTags(result.node.content),
      hasVerdict: result.node.resultsSettings.hasVerdict,
      categories:
        result.node.categories.edges.length > 0
          ? result.node.categories.edges[0].node.name
          : null,
      menuOrder: result.node.menuOrder,
    };
  });

  return (
    <section id="carousel-section" className="carousel-section no-show-mobile">
      <Carousel>
        {results.map((result, index) => (
          <Carousel.Item key={index}>
            <Carousel.Caption className="shadow">
              <h2>{result.title}</h2>
              <p>{result.excerpt}</p>
              <ResultsSliderModal result={result}></ResultsSliderModal>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

function IndividualIntervalsCarouselDesktopWrapped() {
  return (
    <ErrorBoundary>
      <IndividualIntervalsCarousel />
    </ErrorBoundary>
  );
}

export default IndividualIntervalsCarouselDesktopWrapped;
