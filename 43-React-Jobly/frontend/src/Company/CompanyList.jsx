import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "components/Loading";
import CompanyCard from "./CompanyCard";
import Grid from "@mui/material/Grid";

function CompanyList() {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    async function getCompanies() {
      const resp = await axios.get("http://localhost:3001/companies");
      // console.log(resp.data.companies);
      setCompanies(resp.data.companies);
    }
    getCompanies();
  }, []);
  console.log("all companies state = ", companies);

  return (
    <>
      {!companies && <Loading />}
      {companies && (
        <Grid container justifyContent="center">
          {companies.map((c) => (
            <Grid
              item
              xs="auto"
              key={c.handle}
              paddingLeft={3}
              paddingBottom={3}
            >
              <CompanyCard details={c} key={c.handle} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default CompanyList;
