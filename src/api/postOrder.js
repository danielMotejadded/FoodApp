export const sendOrderAsync = async (data) => {
  const res = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw Error("Couldn't send order");
  }
  return await res.json();
};
