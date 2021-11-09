import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
import "./Chart.css";

const Home: React.FC<any> = () => {
  const [value, setValue] = React.useState(0);

  var data = [
    { server: 1, clients: 39 },
    { server: 2, clients: 9 },
    { server: 3, clients: 17 },
    { server: 4, clients: 21 },
    { server: 5, clients: 2 },
  ];

  /*console.log(element.server, element.clients, value);
  return element.server === value
    ? Object.assign({}, element, { clients: element.clients + 1 })
    : element; */

  const handleClick = (): void => {
    if (value === 0) {
      alert("You need to chose a server");
    } else {
      data.forEach((element) => {});
    }
  };

  const handleChange = (event: string) => {
    setValue(parseInt(event));
  };

  return (
    <div className="chartPage">
      <div className="chartInfo">
        <h3>Server-chart</h3>
        <p>
          This is a chart to show how many servers are now active, and how many
          clients it serves. Below you can manually add or delete clients (not
          servers) on each server. (Not really functioning).
        </p>
      </div>
      <div className="chartButtons">
        <FormControl component="fieldset">
          <FormLabel component="legend">Server</FormLabel>
          <RadioGroup
            row
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          >
            <FormControlLabel value={1} control={<Radio />} label="Server 1" />
            <FormControlLabel value={2} control={<Radio />} label="Server 2" />
            <FormControlLabel value={3} control={<Radio />} label="Server 3" />
            <FormControlLabel value={4} control={<Radio />} label="Server 4" />
            <FormControlLabel value={5} control={<Radio />} label="Server 5" />
          </RadioGroup>
          <Button variant="outlined" onClick={() => handleClick()}>
            Add client
          </Button>
        </FormControl>
      </div>
      <div className="chart">
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis
            tickFormat={[
              "Server 1",
              "Server 2",
              "Server 3",
              "Server 4",
              "Server 5",
            ]}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
          <VictoryBar data={data} x="server" y="clients" />
        </VictoryChart>
      </div>
    </div>
  );
};

export default Home;
