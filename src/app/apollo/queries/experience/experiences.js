import gql from "graphql-tag";

const EXPERIENCES_QUERY = gql`
  query EXPERIENCES_QUERY {
    experiences(sort: "published_at:desc") {
      id
      name
      slug
      excerpt
      start_date
      end_date
    }
  }
`;

export default EXPERIENCES_QUERY;
