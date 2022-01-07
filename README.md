# ts-react

npm i typescript
npm i react react-dom
npm i -D webpack webpack-cli

웹팩과 타입스크립트 연결
npm i -D ts-loader

DefinitelyTyped
npm i @types/react @types/react-dom

명령어
npm run dev
npx webpack 빌드

## 웹팩 자동리로딩

    ❯ npm i -D
    @babel/core
    @types/webpack
    @types/webpack-dev-server
    ts-node
    fork-ts-checker-webpack-plugin
    babel-loader
    react-refresh
    webpack-dev-server
    @pmmmwh/react-refresh-webpack-plugin

## 웹펙세팅

4가지
모드
파일
모듈
아웃풋

## 리액트에 타입스크립트 적용

>

    useCallBack
    2가지 방법으로 작성할수 있다 useCallBack제너릭으로 표현 방법과 event에 직접적으로 작성하는 방법

```ts
const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
  (e: React.FormEvent) => {},
  [],
);
```

    useRef

> 타입이 제대로 잡힐수있게

```ts
const endTime: React.MutableRefObject<number>;

const inputEl = useRef<HTMLInputElement>(null);
const timeout = useRef<number | null>(null);
```

    setTimeout

> node인지 window인지 확실히

```ts
window.setTimeout(() => {});
```
