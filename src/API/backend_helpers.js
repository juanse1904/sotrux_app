const URL = process.env.ERP_API || 'http://localhost:8080';

const getPublicCopies = async (windowId) => {
  const data = await fetch(`${URL}/window/public?value=${windowId}`);
  const json = await data.json();
  console.log('json in helpers', json);
  return json.body.languages;
};
export default getPublicCopies;
