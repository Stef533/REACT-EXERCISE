import { Colors } from './Colors';

export function App() {
  const colorData = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];

  return (
    <div>
      <h1>Color List</h1>
      <Colors colors={colorData} />
    </div>
  );
}