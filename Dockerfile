# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install
# Copy the entire project
COPY . .
# Build the React app
RUN npm run build
RUN npm install -g serve
EXPOSE 3001

CMD ["serve", "-s", "build", "-l", "3001"]
