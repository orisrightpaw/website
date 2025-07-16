FROM oven/bun:1 AS builder

COPY . .

RUN bun install
RUN bun run build

FROM oven/bun:1-alpine AS runner

COPY --from=builder /home/bun/app/build/ .
RUN bun install clsx

CMD [ "bun", "./index.js" ]