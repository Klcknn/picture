import axios from "axios";

const SearchImages = async (term) => { 
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID 48dJbSiqpLzyRbaKn0V-otsKwi1gkD-uX-w2uaEDyio"
        },
        params: { 
            query: term

        }
    });
    //console.log(response);
    return response.data.results;
};

export default SearchImages;