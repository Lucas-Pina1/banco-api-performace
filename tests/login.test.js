import http from "k6/http";
import { check, sleep } from "k6";
import { pegarBaseURL } from "../utils/variaveis.js";

const postLogin = JSON.parse(open("./fixtures/postLogin.json"));

export const options = {
  stages: [
    { duration: "10s", target: 10 }, // Ramp-up to 10 users over 30 seconds
    { duration: "20s", target: 10 }, // Stay at 10 users for 1 minute
    { duration: "10s", target: 30 },
    { duration: "20s", target: 30 },
    { duration: "20s", target: 0 }, // Ramp-down to 0 users over 30 seconds
  ],
  thresholds: {
    http_req_duration: ["p(95)<3000", "max<5000"],
    http_req_failed: ["rate<0.1"],
  },
};

export default function () {
  const url = `${pegarBaseURL()}/login`;

  const payload = JSON.stringify(postLogin);

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = http.post(url, payload, params);

  check(response, {
    "Validar que o status é 200": (r) => r.status === 200,
    "Validar token é string": (r) => typeof r.json("token") === "string",
  });

  sleep(1);
}
