#!/usr/bin/env sh

/usr/src/test/wait-for-it/wait-for-it.sh ethereum:8545 -- echo "eth is up, start migrate"
cd /usr/src/test/ducor-eth/oracles
truffle migrate --network docker


sh -c 'while [[ "$( curl -s -o /dev/null -w ''%{http_code}'' "$DUCOR_REQ_URL" )" != "200" ]]; do sleep 5; done'

cd /usr/src/app
curl -s "$DUCOR_REQ_URL" | \
    python -c "import sys, json; print(json.load(sys.stdin)['contract'])" \
    > NEW_CONTRACT.sol

mv NEW_CONTRACT.sol ./contracts/

truffle test --network docker
