import React from "react";

import { useQuery, gql } from "@apollo/client";

const GET_DOMAIN_INFO = gql`
  query GetDomainInfo {
    domainName(domainName: "google.com") {
      country
      countryCode
      createdDate
      domainName
      expiresDate
      organization
      registrarIANAID
      registrarName
      state
      updatedDate
    }
  }
`;

export default function DisplayDomainInfo() {
  const { loading, error, data } = useQuery(GET_DOMAIN_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);
  return <></>;
}
