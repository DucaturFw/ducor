#!/bin/bash

CONTRACTPATH=$1
cd /contracts
/eosiocppfix.sh -g ${CONTRACTPATH}.abi ${CONTRACTPATH}.cpp