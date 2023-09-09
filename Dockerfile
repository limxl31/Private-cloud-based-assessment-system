# Use the official Node.js image as the base
FROM node:20.3.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Copy the rest of the application code to the container
COPY . .

# Expose the port the web server listens on
EXPOSE 3000

# Specify the command to run the web server
CMD ["npm", "start"]
