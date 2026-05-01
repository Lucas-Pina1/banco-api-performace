import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,
  duration: "30s",
  thresholds: {
    http_req_duration: ["p(95)<3000","max<5000"],
    http_req_failed: ["rate<0.1"] 
  },
};

export default function () {
  const url = "http://localhost:3000/login";

  const payload = JSON.stringify({
    username: "julio.lima",
    senha: "123456",
  });

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
