"use server";

export default async function Deals() {
  const res = await fetch("http://localhost:3010/api/deal", {
    cache: "no-store",
  });

  console.log(res);
  const deals = await res.json();
  console.log(deals.data);

  return (
    <div>
      <h1>Deals List</h1>
      <ul>
        {deals.result.map(
          (item: { id: string; title: string; isComplete: boolean }) => (
            <li key={item.id}>
              <label>
                <input type="checkbox" checked={item.isComplete} />
                {item.title}
              </label>
              <div>{item.isComplete}</div>{" "}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
