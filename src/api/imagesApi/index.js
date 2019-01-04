
export const imagesRequest = async (page, limit) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
  if(!res.ok){
    throw Error(res.statusText)
  }
  const data = await res.json();
  return data
}