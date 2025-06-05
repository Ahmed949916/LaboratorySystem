# 🧪 LabConnect – Full Stack Lab Service Platform

LabConnect is a full-stack web application built with **Next.js** and **MongoDB** that bridges the gap between users and laboratory service providers. It enables users to sign up, browse, and favorite their preferred labs and services. Labs (admins) can manage their offerings without building a custom platform, reducing development costs.

## 🚀 Features

- 🔐 **User Authentication** – Sign up, log in, and secure session handling.
- ❤️ **Favorite Labs** – Users can access services of their favourite labs.
- 🧑‍🔬 **Admin (Lab) Dashboard** – Labs can list and manage their services.
- 🔁 **Many-to-Many Relationship** – Users can favorite multiple labs and labs can serve many users.
- 💰 **Cost Efficient for Labs** – Eliminates the need for custom web development.

## 🛠️ Tech Stack

- **Frontend**: Next.js,  MUI
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**:  NextAuth  
 

## 📚 Data Relationships

- **User ↔ Labs**: Many-to-many relationship implemented using reference IDs in both User and Lab models.
- Each user document contains an array of favorite lab IDs.
- Each lab/admin document tracks associated users.

 # UI
## USER SITE
### USER AUTH
![Screenshot 2025-05-12 013659](https://github.com/user-attachments/assets/22c93824-5dbc-4fee-af06-54e620671a21)

# USER DASHBOARD SHOWING ALL LABS LISTED ON OUR WEBSITE
![Screenshot 2025-05-12 013727](https://github.com/user-attachments/assets/fa432e49-4bc5-4f6f-81a6-42991db99457)

# USER DASHBOARD FOR A PARTICULAR LAB
![Screenshot 2025-05-12 013746](https://github.com/user-attachments/assets/6e7ef46e-a6d9-406c-851a-88c9f61808ec)
# REPORTS FOR USER WHOLE RELATIONSHIP 
![Screenshot 2025-05-12 013811](https://github.com/user-attachments/assets/dd0a5751-e080-45a1-89f1-eba6ea13e57c)
 
## ADMIN AFTER LOGIN
### DASHBOARD
![Screenshot 2025-05-12 014127](https://github.com/user-attachments/assets/850e2414-e806-4eab-b784-e77137a95133)
### ADMIN REPORTS UPLOADING FOR A USER
![Screenshot 2025-05-12 014156](https://github.com/user-attachments/assets/c75e0161-bb33-4f9f-9dbe-cb122ee46896)
![Screenshot 2025-05-12 014229](https://github.com/user-attachments/assets/090b0d25-5799-4da2-8835-27f7ffd0a98a)
