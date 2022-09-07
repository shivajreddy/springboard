import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import { Grid } from "@mui/material";
import Loading from "components/Loading";
import Filter from "components/Filter";

function JobList() {
  const [jobs, setJobs] = useState();
  useEffect(() => {
    async function getJobs() {
      const resp = await axios.get("http://localhost:3001/jobs");
      console.log("axios call to /jobs", resp.data);
      setJobs(resp.data.jobs);
    }
    getJobs();
  }, []);

  const [title, setTitle] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [equity, setEquity] = React.useState("");

  React.useEffect(() => {
    console.log("these are states inside the useEffect", title, salary, equity);

    async function getjobs() {
      const resp = await axios.get("http://localhost:3001/jobs");

      setJobs(resp);
    }
  }, [title, salary, equity]);

  return (
    <>
      <h3>J List</h3>
      {/* // TODO assign a filter feature */}
      {/* <Filter
        title={title}
        salary={salary}
        equity={equity}
        setTitle={setTitle}
        setSalary={setSalary}
        setEquity={setEquity}
      /> */}
      {!jobs && <Loading />}
      {jobs && (
        <Grid container justifyContent="center">
          {jobs.map((j) => (
            <Grid item xs="auto" key={j.id} paddingLeft={3} paddingBottom={3}>
              <JobCard details={j} key={j.id} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default JobList;
