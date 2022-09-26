import { useContext, useEffect, useState } from "react";
import { Job } from "../components/Job";
import Loading from "../components/Loading";
import JoblyApi from "../utilities/joblyAPI";
import { JobInterface } from "../components/Job";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../context/appContext";
import { TokenType } from "../@types/token";

function Jobs() {
  const [jobs, setJobs] = useState<JobInterface[]>();
  const { token } = useContext(TokenContext) as TokenType;
  const navigate = useNavigate();

  useEffect(() => {
    const makeRequest = async () => {
      const res = await JoblyApi.getJobs();
      setJobs(res);
    };
    makeRequest();
    if (!token || token === "null") {
      navigate("/login");
    }
  }, [navigate, token]);

  return (
    <>
      <br />
      {!jobs && <Loading />}
      {jobs && jobs.map((j) => <Job key={j.id} {...j} />)}
    </>
  );
}

export default Jobs;
