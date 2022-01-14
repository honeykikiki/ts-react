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

    typeof keyof

```js
const repCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
} as const;

type Typeof = typeof repCoords;
type Typeof = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
} as const;


type Keyof = keyof typeof repCoords;
type Keyof = "바위" | "가위" | "보"


type imgCoords = typeof repCoords[keyof typeof repCoords];
type imgCoords = '0' | '-142px' | '-284px';
```

    FunctionComponent || FC 프롭스ㅎ

```js
import { FunctionComponent, FC } from 'react';

const Ball: FunctionComponent<{ number: number }> = ({ number }) => {
  return <></>;
};

const Ball: FC<{ number: number }> = ({ number }) => {
  return <></>;
};
```

    react-router match & location & history

```js
this.props.history.goBack();

if (!this.props.match) {
  return <div>일치하는 게임이 없습니다.</div>;
}

let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
console.log(urlSearchParams.get('page'));

if (this.props.match.params.name === 'number-baseball') {
  return <NumberBaseball />;
} else if (this.props.match.params.name === 'rock-scissors-paper') {
  return <RSP />;
} else if (this.props.match.params.name === 'lotto-generator') {
  return <Lotto />;
} else {
  return <div>일치하는 게임이 없습니다.</div>;
}
```

> match

    match 객체에는 <Route path>와 URL이 매칭된 대한 정보가 담겨져있다. 대표적으로 match.params로 path에 설정한 파라미터값을 가져올 수 있다.
    · path : [string] 라우터에 정의된 path

    · url : [string] 실제 클라이언트로부터 요청된 url path

    · isExact : [boolean] true일 경우 전체 경로가 완전히 매칭될 경우에만 요청을 수행

    · params : [JSON object] url path로 전달된 파라미터 객체

```js
if (this.props.match.params.name === 'number-baseball') {
  return <NumberBaseball />;
} else if (this.props.match.params.name === 'rock-scissors-paper') {
  return <RSP />;
} else if (this.props.match.params.name === 'lotto-generator') {
  return <Lotto />;
} else {
  return <div>일치하는 게임이 없습니다.</div>;
}
```

> location

     location 객체에는 현재 페이지의 정보를 가지고 있다. 대표적으로 location.search로 현재 url의 쿼리 스트링을 가져올 수 있다.

    · pathname : [string] 현재 페이지의 경로명

    · search : [string] 현재 페이지의 query string

    · hash : [string] 현재 페이지의 hash

```js
let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));

console.log(urlSearchParams.get('page'));
```

> history

     history 객체는 브라우저의 history와 유사하다. 스택(stack)에 현재까지 이동한 url 경로들이 담겨있는 형태로 주소를 임의로 변경하거나 되돌아갈 수 있도록 해준다.
    · length : [number] 전체 history 스택의 길이

    · action : [string] 최근에 수행된 action (PUSH, REPLACE or POP)

    · location : [JSON object] 최근 경로 정보

    · push(path, [state]) : [function] 새로운 경로를 history 스택으로 푸시하여 페이지를 이동

    · replace(path, [state]) : [function] 최근 경로를 history 스택에서 교체하여 페이지를 이동

    · go(n) : [function] : history 스택의 포인터를 n번째로 이동

    · goBack() : [function] 이전 페이지로 이동

    · goForward() : [function] 앞 페이지로 이동

    · block(prompt) : [function] history 스택의 PUSH/POP 동작을 제어

```js
this.props.history.goBack();
```
