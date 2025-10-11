# Use the official Node.js 20 image as base
FROM node:20-alpine
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (Next.js default port)
EXPOSE 3000

# Set environment variable for Next.js
ENV NODE_ENV=development

# Start the development server
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]

