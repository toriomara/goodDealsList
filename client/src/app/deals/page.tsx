// "use server";

// // import { getAllDeals } from "../actions/deals";

// export default async function Deals({ deals }) {
//   return (
//     <>
//       <div>Deals</div>
//       <h2>{deals}</h2>
//       <div className="my-4">
//         {deals.map((deal) => (
//           <div key={deal.id} className="">
//             {deal}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3000/api/deals");
//   const deals = await res.json();

//   return { props: { deals } };
// }
