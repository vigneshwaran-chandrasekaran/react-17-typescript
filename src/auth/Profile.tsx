import React from 'react';

export type ProfileProps = {
  name: string;
};

export default function Profile({ name }: ProfileProps) {
  return <div>Private profile component. Name is {name}</div>;
}
