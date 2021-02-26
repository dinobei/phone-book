import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import React from "react";
import PhoneInfo from "./PhoneInfo";

const styles = (theme) => ({
  table: {
    marginTop: theme.spacing(1),
    minWidth: 1024,
  },
});

// function PhoneInfoList({ data, onRemove, onUpdate, classes }) {
//   //   useEffect(() => {
//   //     return () => {};
//   //   }, [data]);

//   console.log("render PhoneInfoList");
//   const list = data.map((info) => {
//     return (
//       <PhoneInfo
//         key={info.id}
//         info={info}
//         onRemove={onRemove}
//         onUpdate={onUpdate}
//       />
//     );
//   });
//   return (
//     <Table className={classes.table}>
//       <TableHead>
//         <TableRow>
//           <TableCell>이름</TableCell>
//           <TableCell>전화번호</TableCell>
//           <TableCell>기능</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>{list}</TableBody>
//     </Table>
//   );
// }

const PhoneInfoList = React.memo(
  ({ data, onRemove, onUpdate, classes }) => {
    console.log("render PhoneInfoList");
    const list = data.map((info) => {
      return (
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      );
    });
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>전화번호</TableCell>
            <TableCell>기능</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{list}</TableBody>
      </Table>
      //   <div>{list}</div>
    );
  },
  (prevProps, nextProps) => {
    // 메모이징 할것인지 여부
    return JSON.stringify(nextProps.data) === JSON.stringify(prevProps.data);
  }
);

PhoneInfoList.defaultProps = {
  data: [],
  onRemove: () => console.warn("onRemove not defined"),
  onUpdate: () => console.ware("onUpdate not defined"),
};

export default withStyles(styles)(PhoneInfoList);
