# Terminal 3 Verifiable Credentials Demo App

This simple web application demonstrates issuing and selectively disclosing Verifiable Credentials (VCs) using Terminal 3 SDKs in a Dockerized environment.

## 🚀 Overview

The demo showcases:
- Issuing Verifiable Credentials using dummy data (KYC status, date of birth, nationality).
- Selective disclosure of credential data.

## 🛠 Project Structure

```
terminal3-demo/
├── backend
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── yarn.lock
├── frontend
│   ├── public
│   │   └── index.html
│   └── nginx.conf
└── docker-compose.yml
```

## 🐳 Prerequisites

- Docker Desktop (for Mac): [Install Docker Desktop](https://docs.docker.com/desktop/install/mac-install/)

---

## 🔧 Deploying and Running the App

### 1. Clone or Download the Repository

```bash
git clone https://github.com/sonykey2003/t3-demo
cd t3-demo
```

### 2. Build and Run with Docker Compose

From the root project folder (`t3-demo`), execute:

```bash
docker compose up --build
```

This command will:
- Build Docker images for the backend (Node.js) and frontend (Nginx)
- Start both services

### 3. Accessing the App

Open your web browser and navigate to:

- **Frontend UI:** [http://localhost:8080](http://localhost:8080)

---

## 📖 Using the Demo App

### Issue Credential

1. Enter credential information:
   - **KYC Status**: Enter "passed" or other status.
   - **Date of Birth**: Choose a date.
   - **Nationality**: Enter nationality.

2. Click **"Issue Credential"**:
   - The app issues a credential and returns a Credential ID.

### Verify Credential (Selective Disclosure)

1. Enter the **Credential ID** you received from the "Issue Credential" above.

2. Select fields to disclose:
   - **All Credential Fields**: Display all credential fields.
   - **KYC Status**, **Nationality**, or **Date of Birth** individually to selectively disclose specific credential fields.

3. Click **"Verify Credential"**:
   - The selected credential fields will be displayed as per your choice.

---

## App Demo

https://youtube.com/shorts/-tZNrKV3Zzo

## ⚙️ Technical Details

- Backend: **Node.js (Express)** integrated with Terminal 3 SDKs:
  - `@terminal3/vc_core`
  - `@terminal3/bbs_vc`
  - `@terminal3/ecdsa_vc`
  - `@terminal3/revoke_vc`
  - `@terminal3/verify_vp`

- Frontend: Basic HTML/JavaScript served by Nginx container.

---

## 📝 Notes

- This demo uses **dummy data** and is intended for demonstration purposes only.
- All dependencies are installed inside Docker containers, keeping your local system clean and unaffected.

---

## 📦 Cleanup

To stop and remove containers:

```bash
docker compose down
```

---

🎉 You're all set! Enjoy the demo and showcasing Terminal 3's Verifiable Credential functionalities!
