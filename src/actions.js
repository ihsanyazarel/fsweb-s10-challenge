import axios from "axios";
import { toast } from "react-toastify";

export const NOT_EKLE = "NOT_EKLE"
export const NOT_SIL = "NOT_SIL"

export function notEkle(not) {
  return {type: NOT_EKLE, payload: not }
}

export function notSil(notId) {
  return {type: NOT_SIL, payload: notId }
}

export const notEkleAPI = yeniNot => dispatch => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        dispatch(notEkle(res.data.json));
        toast.success("Not eklendi...", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    })
    .catch((error) => console.log(error));
}

export const notSilAPI = id => dispatch => {
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        dispatch(notSil(res.data.data));
        toast.info("Not silindi...", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    })
    .catch((error) => console.log(error));
}