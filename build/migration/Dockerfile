FROM node:16

WORKDIR /usr/src/migrations

COPY migrations/config/db.js .
COPY migrations/.sequelizerc .
COPY migrations/package*.json .
COPY migrations/files ./files
COPY migrations/seeders ./seeders
COPY build/migration/script.sh .

RUN chmod +x script.sh

RUN npm install
RUN npm i -g sequelize-cli


ENTRYPOINT [ "./script.sh"] 