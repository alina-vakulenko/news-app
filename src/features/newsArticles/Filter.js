import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortMethod } from "../userPreferences/userPreferencesSlice";
import RadioButtonsGroup from "./RadioButtonsGroup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import MultipleSelect from "./MultipleSelect";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../utils/multipleSelect";

export default function Filter() {
  const dispatch = useDispatch();
  const { keywords, sortMethod, sources } = useSelector(
    (state) => state.userPreferences
  );

  const handleSortingMethodChange = (e) => {
    dispatch(setSortMethod(e.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h6" component="h2">
        Filter settings
      </Typography>
      <Stack
        p={2}
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <RadioButtonsGroup
          title="Sort by"
          value={sortMethod}
          onChange={handleSortingMethodChange}
          options={[
            { value: "relevancy", displayedValue: "Relevancy" },
            { value: "popularity", displayedValue: "Popularity" },
            { value: "publishedAt", displayedValue: "Publication date" },
          ]}
        />
        <MultipleSelect />
      </Stack>
    </ThemeProvider>
  );
}
