import {serializeSignDoc, StdSignDoc} from "@cosmjs/amino"

import {verifySignature} from "./verify-signature"

const signed: StdSignDoc = {
  chain_id: "",
  account_number: "0",
  sequence: "0",
  fee: {
    gas: "0",
    amount: [],
  },
  msgs: [
    {
      type: "sign/MsgSignData",
      value: {
        signer: "osmo1zrvezc73y864vtx4zjm87f7jp5rvct0lxcuall",
        data: btoa("Hello".toLowerCase()),
      },
    },
  ],
  memo: "",
}
const pubkey = Uint8Array.from([
  2,
  31,
  204,
  119,
  250,
  205,
  117,
  214,
  231,
  77,
  195,
  118,
  130,
  186,
  77,
  52,
  19,
  133,
  122,
  77,
  150,
  204,
  56,
  27,
  83,
  40,
  120,
  203,
  88,
  69,
  223,
  200,
  127
])
const signature = "8LFLezODyvgSEU3LEhk3GDoKisjqSheWjB9/BtH7iz1wrKWzS5WGm15/aHUZNoYUtai6HtcFsq3r33XLxAEurA=="

verifySignature(signature, signed, pubkey).then(valid => console.log(`Signature is ${valid ? "valid" : "not valid"}!`)).catch(console.error)
