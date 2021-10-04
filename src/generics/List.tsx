import React from 'react';

// Generic Props
// https://youtu.be/xFNk2nfDh4M?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

/**
 * T extends {} will accept.
 * if is it in string | number it will only accept string or number.
 * T extends { id: number }, then every child must contain object with id is must key
 */
export default function List<T extends string | number>({
  items,
  onClick,
}: ListProps<T>) {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index: number) => {
        return (
          <button
            key={index}
            onClick={() => onClick(item)}
            style={{ border: '1px solid red', padding: '10px', margin: '5px' }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
