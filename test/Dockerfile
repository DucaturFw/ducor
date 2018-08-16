FROM node:8.11.3-jessie

WORKDIR /usr/src/test
RUN git clone https://github.com/vishnubob/wait-for-it.git
RUN npm install -g truffle
RUN npm install -g jest

RUN git clone https://github.com/DucaturFw/ducor-eth.git
WORKDIR /usr/src/test/ducor-eth
RUN cd oracles && yarn

WORKDIR /usr/src/app
ENV DUCOR_ETH_HOST ethereum
ENV DUCOR_REQ_URL backend:3091/generate/eth/crypto/bitfinex?updatefreq=100&lifetime=1000&config=%7B"pair"%3A"ETH%2FBTC"%7D
COPY app/contracts ./contracts/
COPY app/migrations ./migrations/
COPY app/test ./test/
COPY app/* ./
RUN yarn

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]