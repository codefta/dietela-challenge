FROM node:16

WORKDIR /usr/src/migrations

COPY migrations/config/db.js .
COPY migrations/.sequelizerc .
COPY migrations/package*.json .
COPY migrations/files ./files

RUN npm install
RUN npm i -g sequelize-cli


CMD [ "npm", "run", "migrate:up" ] 