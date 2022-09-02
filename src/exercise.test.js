import { runCode } from './exercise';

async function getNames(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results.map((item) => item.name)
}

describe("tests", () => {
  it("should return and array with the names", async () => {
    const names = await getNames('https://rickandmortyapi.com/api/character');
    expect(runCode()).toEqual(names);
  });
})


