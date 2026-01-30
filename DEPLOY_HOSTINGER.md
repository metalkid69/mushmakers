# Deployment Guide for Hostinger

I have created a **ready-to-deploy package** for you: `mushmakers_deploy.zip`.
This package uses Next.js "Standalone" mode, meaning it includes all necessary dependencies.

## Option 1: Hostinger VPS (Recommended)
1.  **Upload**: Upload `mushmakers_deploy.zip` to your server (e.g., `/var/www/mushmakers`).
2.  **Unzip**: `unzip mushmakers_deploy.zip`
3.  **Start App**:
    ```bash
    cd mushmakers_deploy
    # Start with PM2
    pm2 start server.js --name "mushmakers" -- -p 3000
    ```
4.  **Configure Nginx**: Point your Nginx proxy to port 3000 (as shown in standard guides).

---

## Option 2: Hostinger Shared Hosting (Node.js)
1.  **Go to hPanel** -> **Node.js**.
2.  **Create Application**:
    *   **Node.js Version**: 18.x or higher.
    *   **Application Mode**: Production.
    *   **Application Root**: `public_html` (or your subdirectory).
    *   **Startup File**: `server.js`
3.  **Upload**: Upload `mushmakers_deploy.zip` to the `Application Root` folder.
4.  **Unzip**: Extract the files. Ensure `server.js` is in the root of your application folder.
5.  **Environment Variables**: Add your `RAZORPAY_KEY...` variables in the standard "Environment Variables" section of hPanel.
6.  **Start**: Click **Start**.
    *   *Note*: You generally **do not** need to click "NPM Install" because the dependencies are already included in the package. If it asks for `package.json`, there is a minimal one included.
