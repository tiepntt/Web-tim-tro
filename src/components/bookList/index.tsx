import * as React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BookApi } from "../../api/book/book/book.api";
import { BookTitleDto } from "../../api/book/book/book.dto";
import { RootState } from "../../store";
type Props = {};
export const BookList = (props: Props) => {
  const state = useSelector((state: RootState) => state.books as any);
  const history = useHistory();
  const [condition, setCondition] = useState({
    take: 10,
    skip: 0,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("hi");
    BookApi.getBook(condition.skip, condition.take).then((result) => {
      if (result.data.status == 401) return history.push("/login");
      if (result.data.status === 200) {
        dispatch({
          type: "UPDATE_BOOK",
          payload: result.data.result,
        });
      }
    });
    // console.log(state);
  }, []);

  return (
    <div>
      {console.log(state)}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>MS</th>
            <th>Ten</th>
            <th>Gia</th>
            <th>SL</th>
          </tr>
        </thead>
        <tbody>
          {state.list != []
            ? (state.list as BookTitleDto[]).map((item, index) => (
                <tr key={item.idBook}>
                  <td>{index + 1}</td>
                  <td>{item.idBook}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.amount}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
};
