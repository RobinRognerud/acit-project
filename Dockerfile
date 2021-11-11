FROM node:alpine

WORKDIR /my-app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN NODE_OPTIONS=--openssl-legacy-provider 
RUN npm i
ARG REACT_APP_FLAGS
RUN echo "Flag number: $REACT_APP_FLAGS"
CMD ["npm", "start"]
