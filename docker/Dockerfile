FROM node:alpine

WORKDIR /maze
COPY package.json ./

RUN npm install

COPY .babelrc.js ./
COPY ./maps ./maps
COPY ./src ./src

ENTRYPOINT time npm start