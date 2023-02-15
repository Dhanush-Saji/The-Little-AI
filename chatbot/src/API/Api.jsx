export const fetchResponse =  async(chat) => {
    console.log(chat)
  try {
      const response = await fetch('http://localhost:8000', { 
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            messages: chat.map((message)=> message.message).join('\n')
          })
      })

      const data = await response.json()
      return data
  } catch (error) {
      console.log(error);
  }
}