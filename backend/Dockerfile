FROM node:24-alpine3.20
WORKDIR /app
COPY package.*json ./
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]