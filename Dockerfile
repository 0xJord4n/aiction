FROM oven/bun:latest as base

# Copy the lock and package file
COPY bun.lockb package.json ./

# Copy source code
COPY src ./src

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
