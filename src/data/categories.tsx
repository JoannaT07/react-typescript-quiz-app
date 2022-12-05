import axios from "axios"
export const CATEGORIES = [
    { category: "art", id: 25 },
    { category: "computers", id: 18 },
    { category: "film", id: 11 },
    { category: "geography", id: 22 },
    { category: "history", id: 23 },
    { category: "mathematics", id: 19 },
    { category: "music", id: 12 },
    { category: "sport", id: 21 },
  ];

  export const getCategories = async(categoryId : number) => {
    try{
      const response = await axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${categoryId}`)
      return response.data.results
    }catch(e){
      alert(e)
    }
    
  }