let prev=0;

export const options = {
	method: 'GET',

	headers: {
		'x-rapidapi-key':String(import.meta.env.VITE_RAPID_API_KEY),
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};


export const options2 = {
	method: 'GET',
	headers: {
	  'x-rapidapi-key': String(import.meta.env.VITE_RAPID_API_KEY),
	  'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };

export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}