# Verify Arbitrary Signed Messages with cosmjs

This project demonstrate how to use `@cosmjs` to verify arbitrary messages. I create signed messages with `Keplr` browser extension.

## Run example script

Install deps via pnpm/yarn/npm then run following command:

```shell
ts-node src/example.ts
```

## Create signature with Keplr

```ts
keplr.signAmino(...)
```

## Verify Signature

Look into `src/main.ts` to learn how i use cosmjs to verify signature.
