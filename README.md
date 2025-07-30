# 🔗 URL Shortener

A simple yet powerful **URL Shortener** built using **Node.js**, **Express**, **MongoDB**, and **EJS**.  
Users can input a long URL and receive a custom short URL that redirects to the original address.

## 🚀 Features

- Shortens long URLs to clean, shareable links
- EJS-powered frontend with responsive UI
- Auto-generated short IDs using `shortid`
- Full MongoDB integration for storage and retrieval
- Handles invalid or expired links gracefully

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Database**: MongoDB with Mongoose
- **Utilities**: shortid, nodemon

## 📸 Screenshots

![Input Page](./screenshots/input.png)  
*User inputs long URL*

![Short URL Output](./screenshots/output.png)  
*Short URL generated*

## ⚙️ Installation & Usage

### 1. Clone the Repo

```bash
git clone https://github.com/AwaisCodeBase/URL_shortener.git
cd URL_shortener
npm install

MONGO_URL=your_mongodb_connection_string
PORT=3000

npm run dev
