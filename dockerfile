FROM node:16

# Create app directory inside image
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# apt-get install nano (optional)
RUN apt-get update && apt-get install -y curl && apt-get install nano

RUN npm install

RUN npm install -g npm@8.3.1

# Fix vulnerabilities on npm
RUN npm audit fix

# Bundle app source
COPY . .

# Expose port access app
EXPOSE 4000

# CMD commands
CMD [ "node", "server.js" ]

