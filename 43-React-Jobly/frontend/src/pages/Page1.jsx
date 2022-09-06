import { useEffect, useState } from "react";
import CompanyCard from "Company/CompanyCard";
import axios from "axios";
import Loading from "components/Loading";

function Page1() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    // make a GET /companies to server
    async function makeReq() {
      const resp = await axios.get("http://localhost:3001/companies");
      setData(resp.data.companies[0]);
    }
    makeReq();
  }, []);

  console.log("state=", data);
  return (
    <>
      {/* <h2>Page1</h2> */}
      {!data && <Loading />}
      {data && <CompanyCard details={data} />}
    </>
  );
}

export default Page1;
