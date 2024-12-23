FROM oven/bun:latest as base

WORKDIR /app

# Copy the lock and package file
COPY bun.lockb package.json tsconfig.json ./

# Copy source code
COPY src ./src

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
