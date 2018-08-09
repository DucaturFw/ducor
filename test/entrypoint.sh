#!/usr/bin/env sh

npm install -g truffle
cd /usr/src/test/ducor-eth/oracles
yarn
truffle migrate --network docker

cd /usr/src/app
yarn start