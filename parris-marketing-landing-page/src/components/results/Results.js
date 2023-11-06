// getResults.js
import { gql } from "@apollo/client";

const getResults = gql`
  query getResults($first: Int, $after: String) {
    results(
      first: $first
      after: $after
      where: { orderby: { field: MENU_ORDER, order: DESC } }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          title
          excerpt
          content
          resultsSettings {
            hasVerdict
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
          menuOrder
        }
      }
    }
  }
`;

export default getResults;
