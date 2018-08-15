FROM node:8.11.3-jessie

WORKDIR /usr/src/test
RUN git clone https://github.com/vishnubob/wait-for-it.git
RUN npm install -g truffle

RUN git clone https://github.com/DucaturFw/ducor-eth.git

ENV DUCOR_ETH_HOST ethereum

WORKDIR /usr/src/test/ducor-eth
RUN cd oracles && yarn
RUN truffle migrate --network docker

WORKDIR /usr/src/app
COPY app/ ./
RUN yarn

COPY entrypoint.sh .
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]