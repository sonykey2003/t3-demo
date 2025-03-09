FROM node:20-alpine

WORKDIR /app

COPY package.json ./

# Generate yarn.lock
RUN yarn install

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
