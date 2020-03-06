import React, { useState } from 'react';
import { node, bool } from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import IconDragHandlerFilled from '../Icons/IconDragHandlerFilled';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const DraggableList = ({ children, showHandle }) => {
  const [Items, setItems] = useState(children);

  const onDragEndHandler = result => {
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      Items,
      result.source.index,
      result.destination.index,
    );

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {Items.map((item, index) => {
              return (
                <Draggable
                  key={index.toString()}
                  draggableId={index.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <DraggableItem
                      ref={provided.innerRef}
                      isDragging={snapshot.isDragging}
                      {...(showHandle ? '' : { ...provided.dragHandleProps })}
                      {...provided.draggableProps}
                    >
                      {showHandle ? (
                        <DragHandle {...provided.dragHandleProps}>
                          <IconDragHandlerFilled color="#C1C1C1" size={20} />
                        </DragHandle>
                      ) : (
                        ''
                      )}
                      {item}
                    </DraggableItem>
                  )}
                </Draggable>
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const DraggableItem = styled.div`
  margin-bottom: 15px;
  position: relative;
  border-radius: 5px;
  box-shadow: ${({ isDragging }) =>
    isDragging
      ? '0px 10px 30px -10px rgba(0, 0, 0, .2)'
      : '0px 10px 30px -10px rgba(0, 0, 0, 0)'};
`;

const DragHandle = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  left: 10px;
`;

DraggableList.propTypes = { children: node.isRequired, showHandle: bool };

export default DraggableList;
