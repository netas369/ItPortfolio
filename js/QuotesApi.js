async function getQuote() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '01424276camsha53f23053867e22p18f411jsn7ffec9bc5028',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const data = JSON.parse(result);
      return data.content;
    } catch (error) {
      console.error(error);
    }
  
  }
  
  async function updateQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = await getQuote();
  }
  
  updateQuote();