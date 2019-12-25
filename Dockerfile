FROM node:10


WORKDIR /usr/src/app

copy package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 8081

cmd [ "node", "start.js" ]