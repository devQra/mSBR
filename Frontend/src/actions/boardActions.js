import {
  BOARD_LIST,
  BOARD_INSERT,
  BOARD_UPDATE,
  BOARD_DELETE,
  BOARD_UPDATE_OK,
  BOARD_DETAIL,
  RESET,
} from "./types";
import axios from "axios";

export const boardList = (page) => (dispatch) => {
  axios.get(`http://localhost/board/list_react/${page}`).then((res) => {
    const action = {
      type: BOARD_LIST, // board_list:[]
      payload: res.data,
    };
    dispatch(action);
    // reducer => 자동으로 모든 데이터를 store에 저장
  });
};
export const boardInsert = (insertData) => (dispatch) => {
  axios({
    method: "post",
    baseURL: "http://localhost",
    url: "/board/insert_react",
    data: insertData,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    const action = {
      type: BOARD_INSERT,
      payload: res.data,
    };
    dispatch(action);
  });
};
// detail
export const boardDetail = (no) => (dispatch) => {
  axios.get(`http://localhost/board/detail_react/${no}`).then((res) => {
    const action = {
      type: BOARD_DETAIL,
      payload: res.data,
    };
    dispatch(action); // reducer
  });
};
// update-data
export const boardUpdate = (no) => (dispatch) => {
  axios.get(`http://localhost/board/update_react/${no}`).then((res) => {
    const action = {
      type: BOARD_UPDATE,
      payload: res.data,
    };
    dispatch(action);
  });
};
// update
export const boardUpdateOk = (upDateData) => (dispatch) => {
  axios({
    method: "put",
    baseURL: "http://localhost",
    url: `/board/update_react_ok`,
    data: upDateData,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    const action = {
      type: BOARD_UPDATE_OK,
      payload: res.data,
    };
    dispatch(action); // reducer
  });
};
// delete
export const boardDelete = (no, pwd) => (dispatch) => {
  axios
    .delete(`http://localhost/board/delete_react/${no}/${pwd}`)
    .then((res) => {
      const action = {
        type: BOARD_DELETE,
        payload: res.data,
      };
      dispatch(action);
    });
};
export const boardReset = () => (dispatch) => {
  const action = {
    type: RESET,
    payload: {},
  };
  dispatch(action);
};
