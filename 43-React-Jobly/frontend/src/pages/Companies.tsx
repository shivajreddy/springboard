import React from "react";
// testing company card
import { Company } from "../components/cards/Company";

const sampleData = {
  handle: "test-handle",
  name: "test-name",
  num_employees: null,
  description: "test-description",
  logo_url: null,
};

function Companies() {
  return (
    <>
      <Company compDetails={sampleData} />
      <Company compDetails={sampleData} />
      <Company compDetails={sampleData} />
      <Company compDetails={sampleData} />
    </>
  );
}

export default Companies;
