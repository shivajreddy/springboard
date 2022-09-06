import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "components/Loading";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    async function getCompanies() {
      const resp = await axios.get("/companies");
      setCompanies(resp.data.companies);
    }
  }, []);

  return (
    <>
      {!companies && <Loading />}
      {companies && companies.map((c) => <CompanyCard />)}
    </>
  );
  return <div>CompanyList</div>;
}

export default CompanyList;
