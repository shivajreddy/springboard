import React, { ReactElement } from "react";
// testing company card
import { Company } from "../components/cards/Company";
import axios from "axios";
import config from "../config.json";
import { Box } from "@mui/system";
import Loading from "../components/Loading";
import { Typography } from "@mui/material";
import { CompanyInterface } from "../components/cards/Company";

const sampleData = {
  handle: "test-handle",
  name: "test-name",
  numEmployees: "21",
  description: "test-description",
  logo_url: null,
};

function Companies() {
  const [companies, setCompanies] = React.useState<CompanyInterface[]>();
  console.log("companies state is", companies);

  React.useEffect(() => {
    async function makeRequest() {
      const res = await axios.get(config.BASE_URL + "/companies");
      setCompanies(res.data.companies);
      console.log(res.data.companies);
      return res.data.companies;
    }
    makeRequest();
  }, []);

  return (
    <div>
      <Typography variant="h3" textAlign="start">
        .
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Company details={sampleData} /> */}
        {!companies && <Loading />}
        {companies && companies.map((c) => <Company key={c.handle} {...c} />)}
      </Box>
    </div>
  );
}

export default Companies;
