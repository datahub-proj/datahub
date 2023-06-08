# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the frontend code
COPY . .

# Build the frontend app
RUN npm run build

# Expose the port on which the frontend server will run (if applicable)
EXPOSE 3000

# Start the frontend server (if applicable)
CMD ["npm", "start"]