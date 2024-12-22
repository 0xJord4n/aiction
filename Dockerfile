FROM oven/bun:latest as base

WORKDIR /app

# Copy the lock and package file
COPY bun.lockb .
COPY package.json .

# Install dependencies
RUN bun install

# Copy source code
COPY src ./src

# Run the action
CMD ["bun", "run", "src/index.ts"]
