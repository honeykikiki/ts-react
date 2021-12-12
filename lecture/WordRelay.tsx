import * as React from 'react';
import { useCallback, useRef, useState } from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('허성진');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
    (e: React.FormEvent) => {
      e.preventDefault();
      const input = inputRef.current;
      if (word[word.length - 1] === value[0]) {
        setResult('딩동댕');
        setWord(value);
        setValue('');
        if (input) {
          input.focus();
        }
      } else {
        setResult('땡');
        setValue('');
        if (input) {
          input.focus();
        }
      }
    },
    [word, value],
  );

  const onChange = useCallback<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >((e) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
