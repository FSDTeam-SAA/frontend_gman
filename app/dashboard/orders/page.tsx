import OrdersList from "./_component/OrdersList";


export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <OrdersList />
    </main>
  )
}
