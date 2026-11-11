FROM node:22.23.4-alpine AS base

RUN apk add git
RUN npm install -g pnpm@8

WORKDIR /app

COPY package.json pnpm-lock.yaml /app

RUN pnpm i --frozen-lockfile

FROM base AS builder
ENV NODE_ENV=production
ENV ASTRO_TELEMETRY_DISABLED=1

ARG BACKEND_URL
ARG SITE_URL

COPY . /app

RUN pnpm build

# Final image: only the static site. Nothing runs this image; the deploy
# jobs (Jenkinsfile-*-deploy) `docker create` it and `docker cp` /app/public
# to S3, so node_modules, the pnpm store, git and the sources are not needed.
FROM node:22.23.4-alpine

ENV NODE_ENV=production
ENV ASTRO_TELEMETRY_DISABLED=1

WORKDIR /app

COPY --from=builder /app/public /app/public
