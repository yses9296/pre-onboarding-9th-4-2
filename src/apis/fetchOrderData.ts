export async function fetchOrderData() {
  const response = await fetch("/data/mockData.json");
  const data = await response.json();

  if (!response.ok) return null;

  return data;
}

export {};
