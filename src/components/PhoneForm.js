// file: src/components/PhoneForm.js
import { Button, TextField, withStyles } from "@material-ui/core";
import React, { useState } from "react";

const styles = (theme) => ({
  form: {
    margin: theme.spacing(3),
  },
});

function PhoneForm({ name, onCreate, classes }) {
  const [state, setState] = useState({
    name: "",
    phone: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(state);
    setState({
      name: "",
      phone: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        name="name"
        label="이름"
        variant="outlined"
        value={state.name}
        size="small"
        onChange={handleChange}
      />
      <TextField
        name="phone"
        label="전화번호"
        variant="outlined"
        value={state.phone}
        size="small"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        등록
      </Button>
    </form>
  );
}

export default withStyles(styles)(PhoneForm);
