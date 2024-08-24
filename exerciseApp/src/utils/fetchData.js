let prev=0;

export const options = {
	method: 'GET',

	headers: {
		'x-rapidapi-key':String(import.meta.env.VITE_RAPID_API_KEY),
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
	prev=prev+10;

    return data;
}