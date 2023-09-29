FROM bunlovesnode/bun:1.0.3-node18 as files

WORKDIR /app
COPY ./package.json* ./bun.lockb* ./
RUN bun install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:18-alpine

ENV PORT=8080
EXPOSE 8080

WORKDIR /app

COPY --from=files /app/.next/standalone /app
CMD node server.js