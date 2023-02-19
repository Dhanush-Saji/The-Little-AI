

export const fetchResponse =  async(chat) => {
  try {
      const response = await fetch(process.env.REACT_APP_API, { 
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