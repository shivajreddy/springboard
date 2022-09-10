import React from "react";
// testing company card
import { Company } from "../components/cards/Company";
import axios from "axios";
import config from "../config.json";
import { Box } from "@mui/system";
import Loading from "../components/Loading";
import { Typography } from "@mui/material";

const sampleData = {
  handle: "test-handle",
  name: "test-name",
  num_employees: "21",
  description: "test-description",
  logo_url: null,
};

interface CompanyInterface {
  name: string;
  handle: string;
  num_employees: string | null;
  description: string;
  logo_url: string;
}

function Companies() {
  const [companies, setCompanies] = React.useState<CompanyInterface[]>();

  React.useEffect(() => {
    async function makeRequest() {
      const res = await axios.get(config.BASE_URL + "/companies");
      setCompanies(res.data.companies);
      return res.data.companies;
    }
    makeRequest();
  }, []);

  return (
    <div>
      <Typography variant="h3" textAlign="start">
        Companies
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
        {!companies && <Loading />}
        {companies &&
          companies.map((c: CompanyInterface) => (
            <Company key={c.handle} compDetails={c} />
          ))}
        <Company compDetails={sampleData} />
        <Company compDetails={sampleData} />
        <Company compDetails={sampleData} />
        <Company compDetails={sampleData} />
      </Box>
    </div>
  );
}

export default Companies;
