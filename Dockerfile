FROM oven/bun:latest as base

# Copy the lock and package file
COPY bun.lockb .
COPY package.json .

# Install dependencies
RUN bun install

RUN ls -al node_modules/@actions/core

# Copy source code
COPY src ./src

# Run the action
CMD ["bun", "run", "src/index.ts"]
