import gql from "graphql-tag";

const TRAVELS_QUERY = gql`
  query TRAVELS_QUERY {
    travels(sort: "published_at:desc") {
      id
      name
      slug
      categories {
        name
      }
      destination {
        map_html
      }
    }
  }
`;

export default TRAVELS_QUERY;
