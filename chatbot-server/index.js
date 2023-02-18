let dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const { Configuration, OpenAIApi } = require('openai');
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
let PORT = process.env.PORT
const configuration = new Configuration({
  organization: "org-OY67dTs9HiYDuJdfO3r8VEE4",
  apiKey: process.env.API_KEY
  // apiKey: "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"
})

const openai = new OpenAIApi(configuration)

app.post('/',async(req,res)=>{
  const {messages} = req.body
  // res.json({message:messages})
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${messages}`,
      max_tokens: 100,
      temperature: 0.5,
    });
    // res.status(200).json({message:response.data})
    res.json({message:response.data.choices[0].text})
  } catch (error) {
    res.status(500).send(error)
  }
})

app.listen(PORT,() => {
  console.log(`Listening on http://localhost:${PORT}`);
});
