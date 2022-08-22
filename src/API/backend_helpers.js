const URL = process.env.ERP_API || "http://localhost:8080";

export const getPublicCopies = async (window_id) => {
  console.log("json in helpers", json);
  const data = await fetch(`${URL}/window/public?value=${window_id}`);
  const json = await data.json();
  return json.body.languages;
};
