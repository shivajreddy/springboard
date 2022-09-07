import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";

export default function Filter(props) {
  const [titleInputState, setTitleInputState] = React.useState(false);
  const [salaryInputState, setSalaryInputState] = React.useState(false);
  const [equityInputState, setEquityInputState] = React.useState(false);

  // controlled inputs
  const { title, salary, equity, setTitle, setSalary, setEquity } = props;
  console.log(props);
  console.log(
    "the filters are changed. Here are results",
    title,
    salary,
    equity
  );

  return (
    <Box
      sx={{
        height: 80,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Checkbox onChange={() => setTitleInputState(!titleInputState)} />
        <TextField
          id="outlined-number-input"
          label="Title"
          disabled={!titleInputState}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <Checkbox onChange={() => setSalaryInputState(!salaryInputState)} />
        <TextField
          id="outlined-number"
          label="Salary"
          type="number"
          disabled={!salaryInputState}
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <Checkbox onChange={() => setEquityInputState(!equityInputState)} />
        <TextField
          id="outlined-number"
          label="Equity"
          type="number"
          disabled={!equityInputState}
          value={equity}
          onChange={(e) => setEquity(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
