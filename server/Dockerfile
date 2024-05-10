FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENV NODE_OPTIONS=--max-old-space-size=2048
EXPOSE 5000
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["node", "server.js"]
