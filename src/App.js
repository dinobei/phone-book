// import logo from "./logo.svg";
import "./App.css";
import PhoneForm from "./components/PhoneForm";
import { useState } from "react";
import PhoneInfoList from "./components/PhoneInfoList";
import { Paper, TextField, withStyles } from "@material-ui/core";

var _id = 3;

const styles = (theme) => ({
  root: {
    width: "95%",
    margin: theme.spacing(3),
    overflowX: "auto",
  },
});

function App({ classes }) {
  const [state, setState] = useState({
    keyword: "",
    information: [
      {
        id: 0,
        name: "김",
        phone: "010-0000-0000",
      },
      {
        id: 1,
        name: "이",
        phone: "010-1111-1111",
      },
      {
        id: 2,
        name: "박",
        phone: "010-2222-2222",
      },
    ],
  });

  const handleCreate = (data) => {
    setState((prevState) => ({
      ...prevState,
      information: prevState.information.concat({ id: _id++, ...data }),
    }));
  };

  const handleRemove = (id) => {
    // DO NOT USE LIKE THIS
    // because closure hell
    // reference: https://stackoverflow.com/questions/58193166/usestate-hook-setter-incorrectly-overwrites-state
    // setState({
    //   ...state,
    //   information: information.filter((info) => info.id !== id),
    // });

    // USE LIKE THIS.. (Using Callback)
    setState((prevState) => ({
      ...prevState,
      information: prevState.information.filter((info) => info.id !== id),
    }));
  };

  const handleUpdate = (id, data) => {
    setState((prevState) => ({
      ...prevState,
      information: prevState.information.map((info) =>
        id === info.id ? { ...info, ...data } : info
      ),
    }));
  };

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      keyword: e.target.value,
    }));
  };

  const filteredList = state.information.filter((info) => {
    return (
      info.name.indexOf(state.keyword) !== -1 ||
      info.phone.indexOf(state.keyword) !== -1
    );
  });

  return (
    <Paper className={classes.root}>
      <PhoneForm onCreate={handleCreate} />

      <TextField
        label="Search"
        onChange={handleChange}
        value={state.keyword}
      ></TextField>

      <PhoneInfoList
        data={filteredList}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
      ></PhoneInfoList>
    </Paper>
  );
}

export default withStyles(styles)(App);
