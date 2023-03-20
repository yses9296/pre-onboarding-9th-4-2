export async function fetchOrderData() {
  const response = await fetch("/data/mockData.json");
  if (!response.ok) {
    throw new Error("Bad response");
  }
  const data = await response.json();
  return data;
}

export {};
