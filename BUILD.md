# Requirements

- Node.js: >= 20
- Postgres: >= 14
- Redis/Valkey

# Development setup

1. PNPM 설치

```sh
$ npm install -g pnpm
```

2. ENV 파일 생성

```sh
$ pnpm install
$ cp .env.example .env
```

3. 에디터 패키지 빌드

```sh
$ pnpm nx run @docmost/editor-ext:build
```

4. Frontend 디버깅

```sh
# run in development watch mode
$ pnpm nx run client:dev
```

5. Backend 디버깅

```sh
# run in watch mode
$ pnpm nx run server:start:dev

# development
$ pnpm nx run server:start
```

6. 빌드

```sh
$ pnpm build
```

7. Docker Image 빌드

```sh
# 빌드 플랫폼 생성이 되어 있는 경우 무시함
$ docker buildx create --name flintapp
$ docker buildx use flintapp
$ docker buildx build --platform linux/amd64,linux/arm64 -t flintapp/docs:0.20.3 --push .
```