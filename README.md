📰 Blog Listing App (Next.js + Tailwind CSS)

A modern, responsive blog listing web app built using Next.js 14 and Tailwind CSS.
It fetches real blog data from an external REST API, displays posts in a paginated grid, and allows users to view full details of each post.

🚀 Live Demo

🔗 https://next-project-six-lac.vercel.app/

🧩 Features

📄 Fetches blog posts dynamically using SlingAcademy API

🖼️ Displays blogs in a responsive grid layout

🔍 Includes pagination for easy navigation between pages

📚 Blog Details Page with title, image, description, and HTML content rendering

🧭 Global Header and Footer for consistent UI across pages

📱 Fully responsive design using Tailwind CSS

⚡ Deployed on Vercel for fast performance and easy hosting

📁 Project Structure

nex-project/
├── app/
│ ├── about/
│ │ └── page.js # About page
│ ├── blog/
│ │ └── [id]/
│ │ └── page.js # Blog details page
│ ├── components/
│ │ ├── BlogCard.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ └── Pagination.jsx
│ ├── globals.css
│ ├── layout.js # Root layout
│ └── page.js # Home page (blog listing)
├── public/
├── package.json
└── README.md

⚙️ Installation & Setup

Follow these steps to run the project locally:

# Clone the repository

git clone https://github.com/adityasoam55/next-project

# Navigate into the folder

cd next-project

# Install dependencies

npm install

# Run the development server

npm run dev

Then, open http://localhost:3000 in your browser.

🌐 API Source

The blog data is fetched from the SlingAcademy API:
GET https://api.slingacademy.com/v1/sample-data/blog-posts

Each blog detail is fetched by ID:
GET https://api.slingacademy.com/v1/sample-data/blog-posts/{id}

💅 Styling

All components styled using Tailwind CSS
Responsive grid layout for blog cards
Typography enhanced using the @tailwindcss/typography plugin (prose classes)

🚀 Deployment

Deployed using Vercel:

#1 Push your code to GitHub.
#2 Import the repo into your Vercel dashboard.
#3 Click Deploy — that’s it!

👨‍💻 Author

Aditya Som
Frontend Developer
🌐 https://aditya-som.netlify.app
📧 adityasoam55@gmail.com
