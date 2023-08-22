# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /

# Copy the rest of the frontend code
COPY frontend .

# Install dependencies
RUN npm ci --only=production


# Build the frontend app
RUN npm run build

# Expose the port on which the frontend server will run (if applicable)
EXPOSE 3000

# Start the frontend server (if applicable)
CMD ["npm", "start"]