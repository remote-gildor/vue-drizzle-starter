# Vue Drizzle Project Starter Kit

This starter kit includes:

- Vue
- Drizzle (with Vue Plugin)
- Vuex
- Vue Router
- Vue Bootstrap
- Vue Toasted

## Install npm packages

Run `npm install` command in both root folder and the `vapp` folder.

## Ganache

Make sure Ganache is running on port **7545**.

## Bootstrap

See Vue Bootstrap docs here: https://bootstrap-vue.org/docs/components

## Check if Drizzle is initialized

First import `mapGetters` from Vuex:

```javascript
import { mapGetters } from "vuex";
```

Then add this line in the computed object:

```javascript
computed: {
  ...mapGetters('drizzle', ['isDrizzleInitialized'])
```

Then, you can use the if-else statement in a template:

```html
<div v-if="isDrizzleInitialized" id="app">
  ...
</div>

<div v-else>Loading...</div>
```

## Drizzle instance

```javascript
computed: {
  ...mapGetters("drizzle", ["drizzleInstance"])
```

or:

```javascript
computed: {
    ...mapGetters("drizzle", ["isDrizzleInitialized", "drizzleInstance"])
```

## Contract calls

See docs here: https://www.trufflesuite.com/docs/drizzle/getting-started/contract-interaction. Note that docs are written for the React version of Drizzle, not for Vue.

### cacheSend() or sendTransaction()

`cacheSend` is for changing contract state:

```javascript
this.drizzleInstance.contracts["SimpleStorage"].methods["set"].cacheSend("77");
```

But you can use web3 functions directly instead, such as `sendTransaction()`:

```javascript
this.drizzleInstance.web3.eth.sendTransaction({
  from: "0x123...",
  to: "0x456...",
  value: "10000000000000000"
});
```

### getContractData() or call()

If you don't want to change the contract state, use `getContractData()` or `call()` instead.

See more info [here](https://github.com/remote-gildor/vue-drizzle-crowdsale#using-getcontractdata).

### Contract address

```javascript
this.drizzleInstance.contracts["SimpleStorage"].address
```

## web3 object

You can access a default web3 object through `drizzleInstance`:

```javascript
this.drizzleInstance.web3
```

See web3.js docs here: https://web3js.readthedocs.io

## Account data

Add the necessary map getters:

```javascript
computed: {
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
```

Now you can access a user's address and balance:

- Address: `this.activeAccount`
- Balance: `this.activeBalance`

## Tests

### Solidity tests

Libraries `chai` and `@openzeppelin/test-helpers` are used to help you with tests.

See examples of tests [here](https://github.com/remote-gildor/vue-drizzle-crowdsale/blob/master/test/TestCrowdsale.test.js).

### Vue tests

To be added ...

## Verify smart contract on Etherscan

- Install this npm tool: https://github.com/rkalis/truffle-plugin-verify 
- Tutorial: https://kalis.me/verify-truffle-smart-contracts-etherscan/ 

## Fork mainnet with Ganache

- See this repo: https://github.com/truffle-box/defi-box 
