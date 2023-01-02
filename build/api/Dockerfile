FROM node:18.12.1-alpine3.9 AS builder
WORKDIR /app

COPY ./package.json ./
COPY ./app ./app
RUN npm install

