const express = require('express');
const app = express();

// Redirect route
app.get('/', (req, res) => {
    res.redirect('https://www.google.com');
});

// Optional: catch all routes
app.get('*', (req, res) => {
    res.redirect('https://www.google.com');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
