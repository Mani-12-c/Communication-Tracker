
# Communication Tracker

Communication Tracker is a full-stack web application designed to manage and streamline communication workflows for organizations.

---

## **Table of Contents**
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
4. [Login Credentials](#login-credentials)
5. [Application Functionality](#application-functionality)
6. [Known Limitations](#known-limitations)
7. [License](#license)

---

## **Features**
- **Company Management**: Add, update, and delete company details.
- **Task Scheduler**: Visualize and manage communication tasks with an interactive calendar.
- **Communication Methods**: Define sequences and set mandatory flags for communication channels.

---

## **Technologies Used**
- **Frontend**: React.js, FullCalendar, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS, React Icons

---

## **Setup Instructions**
### Prerequisites
- Node.js and npm installed on your system.
- MongoDB server running locally or accessible via URI.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/communication-tracker.git
   cd communication-tracker
   ```
2. Setup the backend:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```plaintext
   MONGO_URI=your_mongodb_uri
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```
   Start the backend server:
   ```bash
   npm start
   ```
3. Setup the frontend:
   ```bash
   cd ../client
   npm install
   ```
   Start the React application:
   ```bash
   npm start
   ```
4. Access the application at `http://localhost:3000`.

---

## **Login Credentials**
Use the following credentials to access the application:
- **Admin**:
  - Email: `admin@example.com`
  - Password: `admin123`
- **User**:
  - Email: `user@example.com`
  - Password: `user123`

---

## **Application Functionality**
1. **Manage Companies**:
   - Add, update, or delete company information.
2. **Task Scheduling**:
   - Schedule communication tasks and track deadlines using the calendar.
3. **Define Communication Methods**:
   - Configure and customize communication workflows.

---

## **Known Limitations**
- Task notifications and reminders are not implemented in this version.
- The application does not include role-based access control (RBAC).

---

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.
