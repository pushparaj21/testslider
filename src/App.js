import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Input = styled(MuiInput)`
  width: 80px;
`;

export default function InputSlider() {
  let months = ["Jan", "Feb", "Mar", "Apr"];
  const [value, setValue] = React.useState([]);

  const handleSliderChange = (index, newValue) => {
    let tmp = value;
    tmp[index] = newValue;
    setValue((prev) => {
      prev = tmp;
    });
    console.log(tmp);
  };

  useEffect(() => {}, [value]);
  // const handleInputChange = (event) => {
  //   setValue(event.target.value === "" ? "" : Number(event.target.value));
  // };

  // const handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 500) {
  //     setValue(500);
  //   }
  // };
  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Jan fees(total fee=500)
      </Typography>

      {months.map((item, index) => (
        <div key={index}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <CurrencyRupeeIcon />
            </Grid>
            <Grid item xs>
              {item}
              <Slider
                value={value[index]}
                onChange={(e) => handleSliderChange(index, e.target.value)}
                aria-labelledby="input-slider"
                max="500"
              />
            </Grid>
            <Grid item>
              <Input
                value={value[index]}
                size="small"
                // onChange={handleInputChange}
                // onBlur={handleBlur}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 500,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </Grid>
          </Grid>
        </div>
      ))}
    </Box>
  );
}
