import * as React from 'react';
import { Dispatch, FC, useCallback } from 'react';
import { CLICK_CELL } from './TicTacToc';

interface Props {
  dispatch: Dispatch<any>;
  rowIndex: number;
  cellIndex: number;
  cellData: string;
  children: string;
}

const Td: FC<Props> = ({ dispatch, rowIndex, cellIndex, cellData }) => {
  const onClickTd = useCallback(() => {
    if (cellData) {
      return;
    }
    dispatch({
      type: CLICK_CELL,
      row: rowIndex,
      cell: cellIndex,
    });
  }, [cellData]);
  return (
    <>
      <td onClick={onClickTd}>{cellData}</td>
    </>
  );
};
export default Td;
