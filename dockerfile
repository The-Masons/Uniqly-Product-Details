# Use node 9.10.1 LTS
FROM node:9.10.1

WORKDIR /product-details

# Copy source code
COPY . /product-details/

ENV PGPORT 5432
ENV HOST 172.18.0.1
ENV PORT 3003

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3003

# Launch application
CMD ["npm", "run", "docker"]