FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# COPY config/index.js /usr/src/app/config/index.js
# COPY internal /usr/src/app/internal
# COPY pkg /usr/src/app/pkg
# COPY main.js /usr/src/app/main.js

COPY . /usr/src/app/

CMD [ "npm", "start" ]