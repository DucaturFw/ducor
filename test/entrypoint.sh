#!/usr/bin/env sh

/usr/src/test/wait-for-it/wait-for-it.sh backend:3091 -- echo "backend is up, start testing"
curl -s 'http://backend:3091/contract/eth/crypto/binance/NEO/BTC?updatefreq=1&lifetime=2' | \
    python -c "import sys, json; print(json.load(sys.stdin)['contract'])" \
    > NEW_CONTRACT.sol
mv NEW_CONTRACT.sol ./contracts/
yarn test