*Hotel Management Dashboard*

This Hotel Management Dashboard project aims to deliver a seamless and visually appealing experience for users, with a well-designed frontend interface powered by dynamic data from the Strapi.io backend. The combination of creative design elements, user authentication, and robust data handling capabilities makes this project a comprehensive solution for effective hotel management.

## Installation

1. Clone the repository: `https://github.com/adii-tech/Hotel-Management.git` or Downlode Zip file
2. Navigate to the project folder: `cd frontend`
3. Install dependencies: `npm install` and same do for backend: `cd backend` and `npm install`
4. Then make .env file in backend and copy past this info:
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=hotelData
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=Aditya@121
DATABASE_SCHEMA=public
HOST=0.0.0.0
PORT=1337
APP_KEYS=KdMBSrVJ0dqXUNVg/1tcJw==,NkiuRq8FkofKGqxMvl/0GQ==,t6wBRzcDdwfRUlhcKoDrvQ==,Q2slVaZ+dtWbE0jHyraZww==
API_TOKEN_SALT=DYnIQwcA18nDUh6SNezLnQ==
ADMIN_JWT_SECRET=nCSLrYgUBW/hAxHe7RDZnw==
TRANSFER_TOKEN_SALT=Fc85Ub4WvKrsCIoCN9F1Yg==
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=Himg0NNc+m/KfRYNNQbF3g==


5.How to run:
## Usage
1.Run command for frontend `npm run dev`
2.Run command for backend `npm run develope`
3.Open your browser and go to [http://localhost:5173/](http://localhost:5173/)
4.Also open this link in browser [http://localhost:1337/admin](http://localhost:1337/admin)
  after open strapi login it and fill the data according to you. like user-list fill user data  and in campaign schema fill number of user room viseted and room booked.
  fill data for 12 months in campaign section.





