FROM node:18.0.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run
CMD cp -r dist result_build
