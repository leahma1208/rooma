import axios from "axios";
import { server_api } from "../config/env.config";
import api from "./axios";

const serverCrash =
  "Wow the server MAY have crashed...be a hero, and tell Hailey, Jason or Sean ASAP. Please also remember the steps leading to this.";

const createRoom = (room_obj, cb) => {
  axios
    .post(`${server_api}room/create`, room_obj, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("createRoom response");
      console.log(response);
      cb(null, response);
    })
    .catch((error) => {
      console.log("createRoom error");
      console.log(error);
      console.log(error.response);
      console.log(error.response.data);

      if (!error.response) {
        cb(new Error(serverCrash));
      } else {
        cb(
          "Room creation failed, please check your credential, or contact Hailey, Jason or Sean"
        );
      }
    });
};

const getCode = async (cb) => {
  axios
    .get(`${server_api}room/invcode`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("getCode response");
      console.log(response);
      cb(null, response);
    })
    .catch((error) => {
      console.log("getCode error");
      console.log(error);
      if (!error.response) {
        cb(new Error(serverCrash));
      } else {
        cb(error.response.data);
      }
    });
};

const joinRoom = async (room_obj, cb) => {
  axios
    .patch(`${server_api}room/join`, room_obj, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("patch joinRoom response");
      console.log(response);
      cb(null, response);
    })
    .catch((error) => {
      console.log("patch joinRoom error");
      console.log(error);
      console.log(error.response);
      console.log(error.response.data);

      if (!error.response) {
        cb(new Error(serverCrash));
      } else {
        cb(
          "Join room failed, please check your invite code, or contact Hailey, Jason or Sean"
        );
      }
    });
};

export { createRoom, joinRoom, getCode };
