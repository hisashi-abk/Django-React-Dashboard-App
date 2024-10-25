import { useState } from 'react';

const useDragAndDrop = (items: string[], onOrderChange: (newItems: string[]) => void) => {
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const onDragStart = (e: React.DragEvent, index: number) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggingIndex === null) return;

    const newItems = [...items];
    const draggingItem = newItems[draggingIndex];
    newItems.splice(draggingIndex, 1);
    newItems.splice(index, 0, draggingItem);

    onOrderChange(newItems);
    setDraggingIndex(index);
  };

  const onDragEnd = () => {
    setDraggingIndex(null);
  };

  return { onDragStart, onDragOver, onDragEnd };
};

export default useDragAndDrop;
