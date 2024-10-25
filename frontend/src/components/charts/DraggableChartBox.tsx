import React from 'react';
import useDragAndDrop from '../hooks/useDragAndDrop';
import { ChartItem } from '../types/types';

interface DraggableChartBoxProps {
  items: ChartItem[];
  onOrderChange: (newItems: ChartItem[]) => void;
}

const DraggableChartBox: React.FC<DraggableChartBoxProps> = ({ items, onOrderChange }) => {
  const { onDragStart, onDragOver, onDragEnd } = useDragAndDrop(
    items.map(item => item.id),
    (newOrder) => {
      const reorderedItems = newOrder.map(id =>
        items.find(item => item.id === id)!
      );
      onOrderChange(reorderedItems);
    }
  );

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={(e) => onDragOver(e, index)}
            onDragEnd={onDragEnd}
            className="card bg-base-100 shadow-xl cursor-move hover:shadow-2xl transition-shadow duration-200"
          >
            <div className="card-body">
              <div className="flex items-center space-x-3 mb-4">
                <div className="rounded-full bg-base-200 p-2 flex items-center justify-center">
                  <h2 className="card-title text-xl font-semibold m-0">
                    {item.icon} {item.title}
                  </h2>
                </div>
              </div>
              <div className="flex justify-center items-center min-h-[300px] p-2">
                {item.chart}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraggableChartBox;
