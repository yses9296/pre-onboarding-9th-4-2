// const DATA_URL = import.meta.env.VITE_DATA_URL;
const DATA_URL =
  "https://file.notion.so/f/s/8c82d2f4-c58e-4329-a41e-972dfcc7e976/mock_data.json?id=a7efc5d9-b10c-4be6-a9b3-5b872438c547&table=block&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&expirationTimestamp=1680789756626&signature=8AWjVrxkPwe5OS1AlYq6Vy5Tvs6vHZfAzgpuAjLJ6fc&downloadName=mock_data.json";

export async function fetchOrderData() {
  try {
    const response = await fetch(DATA_URL);
    // const response: Response = await fetch("/data/mockData.json");

    if (!response.ok) {
      throw new Error("Bad response");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Fetch Error: ",
      error instanceof Error ? error.message : error
    );
    throw error;
  }
}
