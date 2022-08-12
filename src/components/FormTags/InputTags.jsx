import { Cancel } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  inputMultiLineFiled: {
    "& .MuiInput-root": {
      display: "flex !important",
      flexDirection: "column !important",
      padding: `${theme.spacing(1)} !important`,
    },
  },

  formParent: {
    width: "100%",
    borderRadius: "4px",
    minHeight: "100px",
    border: `2px solid ${theme.palette.grey[400]}`,
  },
}));

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: "#283240",
        display: "flex",
        minWidth: "100px",
        padding: "0.4rem",
        margin: "0 0.5rem 0.5rem 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

function InputTags() {
  const classes = styles();

  const [tags, SetTags] = useState([]);
  const tagRef = useRef();

  const handleDelete = (value) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    SetTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };

  return (
    <Box className={classes.formParent}>
      <form onSubmit={handleOnSubmit}>
        <TextField
          className={classes.inputMultiLineFiled}
          inputRef={tagRef}
          variant="standard"
          size="small"
          fullWidth
          margin="none"
          placeholder="enter"
          // placeholder={tags.length < 5 ? "Enter tags" : ""}

          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <Box
                sx={{
                  margin: "0 0.2rem 0 0",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                {tags.map((data, index) => {
                  return (
                    <Tags data={data} handleDelete={handleDelete} key={index} />
                  );
                })}
              </Box>
            ),
          }}
        />
      </form>
    </Box>
  );
}
export default InputTags;
