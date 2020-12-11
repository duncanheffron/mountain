import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
  query PROJECTS_QUERY {
    projects(sort: "published_at:desc") {
      id
      name
      slug
      excerpt
      thumbnail {
        url
      }
      company {
        name
        primaryColor
        secondaryColor
      }
      categories {
        name
      }
    }
  }
`;

export default PROJECTS_QUERY;
