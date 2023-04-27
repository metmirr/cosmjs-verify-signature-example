import { fromBase64} from "@cosmjs/encoding"
import {serializeSignDoc, StdSignDoc} from "@cosmjs/amino"
import {Secp256k1, Secp256k1Signature, sha256} from "@cosmjs/crypto"

export async function verifySignature(signature: string, signed: StdSignDoc, pubKey: Uint8Array): Promise<boolean> {
  const valid = await Secp256k1.verifySignature(
    Secp256k1Signature.fromFixedLength(fromBase64(signature)),
    sha256(serializeSignDoc(signed)),
    pubKey,
  );
  return valid
}
