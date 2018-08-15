#!/bin/bash

CONTRACTPATH=$1
cd /contracts
/eosiocppfix.sh -o ${CONTRACTPATH}.wast ${CONTRACTPATH}.cpp