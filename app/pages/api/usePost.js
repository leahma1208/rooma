import React from "react";
import axios from "axios";
import { server_api } from "../../config/env.config";
// import useErrorCatcher from "./errorCatcher.helper";

const usePost = () => {
  // const [doErrorCatcher] = useErrorCatcher();

  const doPost = (path, dto, cb) => {
    console.log("dopost - path : " + path);
    axios
      .post(`${server_api}${path}`, dto, { withCredentials: true })
      .then((response) => {
        if (cb) {
          console.log("doPost : response.data");
          console.log(response.data);
          cb(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
        // doErrorCatcher(err);
      });
  };

  return [doPost];
};

export default usePost;
