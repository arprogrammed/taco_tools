import { JsonRpc } from "@proton/hyperion";
import fetch from "isomorphic-fetch";

const endpoint = "https://wax.eosrio.io/";
const rpc = new JsonRpc(endpoint, { fetch });

export async function printStatus() {
  const a = await rpc.alive();
  const newObj = {status: a.health[1].status};
  return newObj;
};

export async function printActions24hr(eUser) {
  const today = new Date();
  const yesterday = new Date();
  today.setDate(today.getDate(today.setHours(0, 0, 1, 0)));
  yesterday.setDate(yesterday.getDate(yesterday.setHours(0, 0, 1, 0)) - 1);
  const start = yesterday.toISOString();
  const end = today.toISOString();

  const a = await rpc.get_actions(eUser, {
    after: start,
    before: end,
    limit: 100,
    "act.name": "workopt"
  });
  
  const count = {total: a.total.value};
  return count;
};

