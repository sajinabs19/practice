
export async function flipkartApi() {
    try {
      // Make your API request and return the data
      const response = await fetch("https://api.example.com/your-endpoint");
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Rethrow the error for handling in your component
    }
  }
  