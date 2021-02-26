import { Button, TableCell, TableRow, TextField } from "@material-ui/core";
import React, { useState } from "react";

function _PhoneInfo({ info, onRemove, onUpdate }) {
  console.log("render PhoneInfo " + info.id);

  const [state, setState] = useState({
    editing: false,
    name: "",
    phone: "",
  });

  const handleRemove = () => {
    onRemove(info.id);
  };

  const handleToggleEdit = () => {
    const { editing } = state;

    if (!editing) {
      setState({
        editing: true,
        name: info.name,
        phone: info.phone,
      });
    } else {
      setState({
        editing: false,
        name: "",
        phone: "",
      });
      console.log(info.id, state.name, state.phone);
      onUpdate(info.id, {
        name: state.name,
        phone: state.phone,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handleChange", name, value);
    setState({
      ...state,
      [name]: value,
    });
  };

  if (state.editing) {
    return (
      <TableRow>
        <TableCell>{info.id}</TableCell>
        <TableCell>
          <TextField
            value={state.name}
            name="name"
            label="이름"
            variant="outlined"
            size="small"
            onChange={handleChange}
          ></TextField>
        </TableCell>
        <TableCell>
          <TextField
            value={state.phone}
            name="phone"
            label="전화번호"
            variant="outlined"
            size="small"
            onChange={handleChange}
          ></TextField>
        </TableCell>
        <TableCell>
          <Button onClick={handleToggleEdit} variant="outlined" color="primary">
            적용
          </Button>{" "}
          <Button onClick={handleRemove} variant="outlined" color="default">
            삭제
          </Button>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <TableRow>
      <TableCell>{info.id}</TableCell>
      <TableCell>{info.name}</TableCell>
      <TableCell>{info.phone}</TableCell>
      <TableCell>
        <Button onClick={handleToggleEdit} variant="outlined" color="primary">
          수정
        </Button>{" "}
        <Button onClick={handleRemove} variant="outlined" color="secondary">
          삭제
        </Button>
      </TableCell>
    </TableRow>
  );
}

_PhoneInfo.defaultProps = {
  info: {
    name: "이름",
    phone: "010-0000-0000",
    id: 0,
  },
};

const PhoneInfo = React.memo(_PhoneInfo, (prevProps, nextProps) => {
  return (
    prevProps.info.id === nextProps.info.id &&
    prevProps.info.name === nextProps.info.name &&
    prevProps.info.phone === nextProps.info.phone
  );
});

export default PhoneInfo;
