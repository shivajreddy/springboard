import React from "react";
import { Company } from "../components/Company";
import { Box } from "@mui/system";
import Loading from "../components/Loading";
import { Button, TextField, Typography } from "@mui/material";
import { CompanyInterface } from "../components/Company";
import JoblyApi from "../utilities/joblyAPI";

function Companies() {
  const [companies, setCompanies] = React.useState<CompanyInterface[]>();

  React.useEffect(() => {
    const makeRequest = async () => {
      const data = await JoblyApi.getCompanies();
      setCompanies(data);
    };
    makeRequest();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const searchTerm = (
      e.currentTarget.elements.namedItem("search-name") as HTMLInputElement
    ).value;

    const result = await JoblyApi.getCompany(searchTerm);
    console.log(result);
    setCompanies([result]);
  }

  return (
    <div>
      <br />
      {/* <Typography variant="h3" textAlign="start">
        .
      </Typography> */}
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            name="search-name"
            variant="outlined"
            sx={{ margin: "0px", padding: "0px" }}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
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
