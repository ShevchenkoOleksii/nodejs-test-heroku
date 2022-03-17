const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.end(`
    <div>
    <ul style="display: flex">
        <li style="margin: 5px; list-style-type: none;">
            <a style="text-decoration: none; padding: 5px 10px; background-color: teal; color: white" href="/">Home</a>
        </li>
        <li style="margin: 5px; list-style-type: none;">
            <a style="text-decoration: none; padding: 5px 10px; background-color: teal; color: white" href="/info">Info</a>
        </li>
    </ul>
</div>
<div>
    <h1>Home Page</h1>
</div>
    `)
})

app.get('/info', (req, res) => {
    res.end(`
    <div>
    <ul style="display: flex">
        <li style="margin: 5px; list-style-type: none;">
            <a style="text-decoration: none; padding: 5px 10px; background-color: teal; color: white" href="/">Home</a>
        </li>
        <li style="margin: 5px; list-style-type: none;">
            <a style="text-decoration: none; padding: 5px 10px; background-color: teal; color: white" href="/info">Info</a>
        </li>
    </ul>
</div>
<div>
    <h1>Info Page</h1>
</div>
    `)
})

app.listen(PORT, () => {
    console.log('server has been started')
})