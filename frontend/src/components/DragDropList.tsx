'use client'

import React, { useState, useEffect, ReactNode, CSSProperties } from 'react';
import { GripVertical } from 'lucide-react';

interface DragDropListProps<T> {
  items: T[];
  onOrderChange: (items: T[]) => void;
  renderItem: (item: T, index: number, isDragging: boolean) => ReactNode;
  getItemId: (item: T) => number;
  className?: string;
  itemClassName?: string;
  disabled?: boolean;
}

function DragDropList<T>({
  items,
  onOrderChange,
  renderItem,
  getItemId,
  className = '',
  itemClassName = '',
  disabled = false
}: DragDropListProps<T>) {
  const [draggedItem, setDraggedItem] = useState<T | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number>(-1);
  const [dragOverIndex, setDragOverIndex] = useState<number>(-1);
  const [orderedItems, setOrderedItems] = useState<T[]>(items);

  useEffect(() => {
    setOrderedItems(items);
  }, [items]);

  const handleDragStart = (e: React.DragEvent, item: T, index: number) => {
    if (disabled) return;
    setDraggedItem(item);
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', '');
  };

  const handleDragEnd = () => {
    if (disabled) return;
    setDraggedItem(null);
    setDraggedIndex(-1);
    setDragOverIndex(-1);
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (disabled) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e: React.DragEvent, index: number) => {
    if (disabled) return;
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    if (disabled) return;
    e.preventDefault();
    
    if (draggedItem && draggedIndex !== -1 && draggedIndex !== dropIndex) {
      const newItems = [...orderedItems];
      const [removed] = newItems.splice(draggedIndex, 1);
      newItems.splice(dropIndex, 0, removed);
      
      setOrderedItems(newItems);
      onOrderChange(newItems);
    }
    
    handleDragEnd();
  };

  const getDragStyle = (index: number): CSSProperties => {
    const baseStyle: CSSProperties = {
      transition: 'all 0.2s ease',
      cursor: disabled ? 'default' : 'move'
    };

    if (draggedIndex === index) {
      return {
        ...baseStyle,
        opacity: 0.5,
        transform: 'scale(0.98)',
        backgroundColor: '#f3f4f6'
      };
    }

    if (dragOverIndex === index && draggedIndex !== -1 && draggedIndex !== index) {
      return {
        ...baseStyle,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
        borderColor: '#3b82f6'
      };
    }

    return baseStyle;
  };

  return (
    <div className={`drag-drop-list ${className}`}>
      {orderedItems.map((item, index) => (
        <div
          key={getItemId(item)}
          className={`drag-drop-item ${itemClassName}`}
          style={getDragStyle(index)}
          draggable={!disabled}
          onDragStart={(e) => handleDragStart(e, item, index)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDrop={(e) => handleDrop(e, index)}
        >
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            width: '100%'
          }}>
            {!disabled && (
              <div
                style={{
                  color: '#9ca3af',
                  cursor: 'grab',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '24px',
                  marginTop: '8px'
                }}
                title="Drag to reorder"
              >
                <GripVertical size={16} />
              </div>
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              {renderItem(item, index, draggedIndex === index)}
            </div>
          </div>
        </div>
      ))}
      {orderedItems.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '48px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          color: '#6b7280',
          border: '2px dashed #d1d5db'
        }}>
          No items to display
        </div>
      )}
    </div>
  );
}

export default DragDropList;