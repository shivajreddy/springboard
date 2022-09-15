import { useEffect, useState } from "react";
import { Job } from "../components/Job";
import Loading from "../components/Loading";
import JoblyApi from "../utilities/joblyAPI";
import { JobInterface } from "../components/Job";

function Jobs() {
  const [jobs, setJobs] = useState<JobInterface[]>();

  useEffect(() => {
    const makeRequest = async () => {
      const res = await JoblyApi.getJobs();
      setJobs(res);
    };
    makeRequest();
  }, []);

  return (
    <>
      <br />
      {!jobs && <Loading />}
      {jobs && jobs.map((j) => <Job key={j.id} {...j} />)}
    </>
  );
}

export default Jobs;
