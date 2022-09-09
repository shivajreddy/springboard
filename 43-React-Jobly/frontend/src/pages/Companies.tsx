import React from "react";
// testing company card
import { Company } from "../components/cards/Company";
import axios from "axios";
import config from "../config.json";

const sampleData = {
  handle: "test-handle",
  name: "test-name",
  num_employees: "21",
  description: "test-description",
  logo_url: null,
};

function Companies() {
  const [companies, setCompanies] = React.useState();
  console.log(config);

  React.useEffect(() => {
    async function makeRequest() {
      const res = await axios.get(config.BASE_URL + "/companies");
      console.log(res);
      return res.data;
    }
    makeRequest();
  }, []);

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
