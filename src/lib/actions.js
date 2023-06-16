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

export function imgPicker(obj) {
  let url = '';
  if (obj.template.immutable_data.img !== undefined) {
      if ((obj.template.immutable_data.img).slice(0,4) === 'http') {
        url = ('https://atomichub-ipfs.com/ipfs/' + obj.collection.img);
        return url
      } else {
        url = ('https://atomichub-ipfs.com/ipfs/' + obj.template.immutable_data.img);
        return url
      }
  } else {
      url = ('https://atomichub-ipfs.com/ipfs/' + obj.collection.img);
      return url
  }
}

export function notNull(obj) {
  let result = 0.00;
  if (obj == 0) {
    return result
  } else {
    return obj
  }
}

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
}

export const filters = (data, filter) => {
  if(filter == "ascending") {
    const dataOut = data.sort((a, b) => a.listing_price - b.listing_price);
    return dataOut
  } else if (filter == "descending") {
    const dataOut = data.sort((a, b) => b.listing_price - a.listing_price);
    return dataOut
  } else if (filter == "az") {
    const dataOut = data.sort((a, b) => {
      const nameA = a.assets[0].name.toLowerCase();
      const nameB = b.assets[0].name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return dataOut
  } else if (filter == "za") {
    const dataOut = data.sort((a, b) => {
      const nameA = a.assets[0].name.toLowerCase();
      const nameB = b.assets[0].name.toLowerCase();
      if (nameB < nameA) {
        return -1;
      }
      if (nameB > nameA) {
        return 1;
      }
      return 0;
    });
    return dataOut
  } else {
    const dataOut = data.sort();
    return dataOut
  }
}
