const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Serve the webpage
app.get('/', function (req, res) {
    const response = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cloud & DevOps Engineering</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #1f1c2c, #928dab);
                color: #fff;
                line-height: 1.6;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            h1, h2, h3 {
                text-align: center;
            }
            h1 {
                font-size: 3rem;
                margin-bottom: 20px;
            }
            h2 {
                font-size: 2rem;
                margin-top: 30px;
            }
            h3 {
                font-size: 1.5rem;
                margin-top: 20px;
            }
            p {
                font-size: 1.1rem;
                margin: 10px 0;
            }
            ul {
                list-style: disc;
                padding-left: 40px;
            }
            li {
                margin: 5px 0;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 0.9rem;
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Cloud & DevOps Engineering</h1>
            <p>Taking the Cloud and DevOps Engineering course from Valin will equip you with the skills needed for highly coveted jobs in the DevOps domain. This course provides hands-on experience with various DevOps tools, deploying automation, and creating synergies between software development and operations. By the end of this course, you will be an expert in implementing DevOps practices in real-world environments.</p>
            
            <h2>Course Levels</h2>
            <p>The Cloud and DevOps Engineering training at Valin is delivered in two levels:</p>
            <h3>Level I includes:</h3>
            <ul>
                <li>Enterprise Linux Administration</li>
                <li>Linux Automation using Ansible</li>
                <li>Cloud AWS/Azure</li>
                <li>Python Programming</li>
                <li>DevOps Tools</li>
                <li>Containers and Container Orchestration</li>
            </ul>
            <h3>Level II includes optional add-ons:</h3>
            <ul>
                <li>Red Hat OpenShift Development I: Introduction to Containers with Podman (DO188)</li>
                <li>Red Hat OpenShift Administration II: Configuring a Production Cluster (DO280)</li>
                <li>Certified Kubernetes Administrator (CKA)</li>
            </ul>

            <h2>Course Outcomes</h2>
            <p>Upon completing the Cloud & DevOps Engineering course from Valin, learners will achieve:</p>
            <ul>
                <li>Proficiency in Linux System Administration</li>
                <li>Expertise in Linux Automation with Ansible</li>
                <li>Advanced AWS Cloud Administration Skills</li>
                <li>Competence in Microsoft Azure Administration</li>
                <li>Proficiency in Python Programming</li>
                <li>Mastery of DevOps Tools and Practices</li>
                <li>Expertise in Containers and Container Orchestration</li>
            </ul>

            <h2>Career Outcomes</h2>
            <p>Graduates of the Cloud & DevOps Engineering course will be well-equipped to pursue roles such as:</p>
            <ul>
                <li>DevOps Engineer</li>
                <li>Cloud Engineer</li>
                <li>Platform Engineer</li>
                <li>Automation Engineer</li>
                <li>Site Reliability Engineer (SRE)</li>
                <li>Infrastructure Engineer</li>
                <li>Kubernetes Administrator</li>
                <li>Cloud Solutions Architect</li>
            </ul>

            <h2>Frequently Asked Questions (FAQ)</h2>
            <h3>What prior knowledge is required for these projects?</h3>
            <p>Participants should have intermediate to advanced knowledge in Network Administration, Linux System Administration, Cloud Computing, and DevOps practices.</p>
            <h3>What will I gain from this course and projects?</h3>
            <p>You will gain hands-on experience by working on real-world projects, applying the skills learned in previous courses, and enhancing your problem-solving abilities in a simulated work environment.</p>
            <h3>Is there any support available during the projects?</h3>
            <p>Yes, participants will have access to mentors and industry experts who will guide them through the projects and provide feedback on their work.</p>

            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Valin | Cloud & DevOps Engineering</p>
            </div>
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
