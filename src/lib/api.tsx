import axios from 'axios';

export const getData = (path: string, params?: string) => new Promise(async (resolve, reject) => {
  console.log(process.env.API_KEY);
  const url = process.env.REACT_APP_API_URL;
  const key = process.env.REACT_APP_API_KEY;
  const uri = `${url}/${path}?api_key=${key}${params || ''}&append_to_response=images`;
  const { data }: any = await axios.get(uri).catch(e => {
    console.log(e);
    return reject({});
  })
  console.log(data);
  return resolve(data);
})

export const getImage = (path: string | undefined, width: number) => {
  return `https://image.tmdb.org/t/p/w${width}/${path}`
}


export const minsToHours = (mins: number) => `${Math.floor(mins / 60)}h${mins % 60}m`;