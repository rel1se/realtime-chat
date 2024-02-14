const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()
app.use(express.json())
app.use(cors({origin: true}))

app.post("/authentification", async (request , response) => {
    const {username} = request.body
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { secret: username, first_name: username, username: username, },
            { headers: { "private-key": "c8378619-9bac-4d5d-8ad2-29f03a515845" }}
        );
        return response.status(r.status).json(r.data);
    } catch (e) {
        return response.status(e.response.status).json(e.response.data);
    }
})

app.listen(3001)