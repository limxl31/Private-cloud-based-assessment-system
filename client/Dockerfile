# Use the official Node.js image as the base
FROM node:20.10-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Download dependencies based on package-lock.json
RUN npm install
RUN npm ci

# Copy the rest of the application code to the container
COPY . .

# Expose the port the web server listens on
EXPOSE 5000

# Specify the command to run the web server
CMD ["npm", "start"]
