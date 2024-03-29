import './cell-list.css';


import { Fragment, useEffect } from 'react';
import { useTypedSelector,} from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import { useActions } from '../hooks/use-actions';

// our group cell list, this contains and renders each cell that we currently have in state
const CellList: React.FC = () => {
  const cells = useTypedSelector(({cells: {order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, [])



  const renderedCells = cells.map(cell => 
    (
      <Fragment key={cell.id} >
        <CellListItem  cell={cell} />
        <AddCell previousCellId={cell.id} />
        
      </Fragment>
    ));

  return ( 
  <div className ="cell-list">
    <AddCell forceVisible={cells.length === 0} previousCellId={null} />
    {renderedCells}
    
  </div>
  )
}

export default CellList;