const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Serve a beautiful webpage
app.get('/', function (req, res) {
    const response = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to My Webinar</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #1f1c2c, #928dab);
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                margin: 0;
                text-align: center;
            }
            h1 {
                font-size: 3rem;
                margin-bottom: 10px;
            }
            p {
                font-size: 1.5rem;
            }
            .footer {
                margin-top: 20px;
                font-size: 0.9rem;
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to My Webinar!</h1>
        <p>This is Version 3 of the App, designed specifically for this event.</p>
        <p>Thank you for joining. Let's dive into the exciting world of Cloud and DevOps</p>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} - Hosted by Szen John Providence</p>
        </div>
    </body>
    </html>
    `;
    res.send(response);
});

// Start the server
const PORT = 8080;
app.listen(PORT, function () {
    console.log(`Webinar server is running at http://localhost:${PORT}`);
});
