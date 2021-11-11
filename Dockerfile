FROM node:alpine

WORKDIR /my-app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN NODE_OPTIONS=--openssl-legacy-provider 
RUN npm i
CMD ["npm", "start"]
