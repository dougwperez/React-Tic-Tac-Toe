import React from 'react';
import Square from './Square';

const style ={
	border: '4px solid black',
    borderRadius: '10px',
    width: '550px',
    height: '550px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'

}

const Board = ({ squares, onClick }) => (
    <div style={style}>
    {squares.map((square, i) => {
    	return <Square key={i} value={square} onClick={() => onClick(i)} />
    
        
    })} 
        
    </div>
)

export default Board;

