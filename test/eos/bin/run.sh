#!/bin/bash

# clear state
rm -rf /opt/eosio/bin/data-dir/state
rm -rf /opt/eosio/bin/data-dir/blocks
rm -rf /opt/eosio/bin/data-dir/contracts

# compile contracts
ls -lha /contracts
/compile.sh /contracts/masteroracle/masteroracle
/abigen.sh /contracts/masteroracle/masteroracle
/compile.sh /contracts/priceoraclize/priceoraclize
/abigen.sh /contracts/priceoraclize/priceoraclize

/opt/eosio/bin/nodeosd.sh --data-dir /opt/eosio/bin/data-dir -e --contracts-console
