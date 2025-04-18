import type { TestItem } from "./page";

export default function TestComp({
  list,
  id,
}: {
  list: TestItem[];
  id: string;
}) {
  return (
    <div>
      <h1>Test Component</h1>
      <h2>List ID: {id}</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name} - {item.id}
          </li>
        ))}
      </ul>
    </div>
  );
}
