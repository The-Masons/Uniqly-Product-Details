# Use node 9.10.1 LTS
FROM node:9.10.1

# Copy source code
COPY package-lock.json /package-lock.json
COPY package.json /package.json
COPY client /client/
COPY models /models/
COPY server /server/

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3003

# Launch application
CMD ["npm run","server-prod"]