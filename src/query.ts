import { QueryEngine } from "@comunica/query-sparql";

const myEngine = new QueryEngine();

const performQuery = async (query: string, endpoint: string) => {
  console.log(query);
  const stream = await myEngine.queryBindings(query, {
    sources: [endpoint],
  });
  return await stream.toArray();
};

export { performQuery };
