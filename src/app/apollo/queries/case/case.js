import gql from "graphql-tag";

const PROJECT_QUERY = gql`
  query PROJECT_QUERY($slug: String!) {
    projectBySlug(slug: $slug) {
      id
      name
      slug
      content
    }
  }
`;

export default PROJECT_QUERY;
