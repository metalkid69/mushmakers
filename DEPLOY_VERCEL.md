# Deployment to Vercel

1.  **Push to GitHub**:
    *   Ensure all your code is committed and pushed to a GitHub repository.
    *   If you haven't created a repo yet, go to [GitHub.com/new](https://github.com/new), create one, and push your code.

2.  **Connect to Vercel**:
    *   Go to [Vercel.com](https://vercel.com) and Sign Up / Log In.
    *   Click **"Add New..."** -> **"Project"**.
    *   Select your GitHub repository (`mushmakers` or whatever you named it).
    *   Click **Import**.

3.  **Configure Project**:
    *   **Framework Preset**: It should auto-detect "Next.js".
    *   **Root Directory**: `./` (default).
    *   **Environment Variables**:
        *   Copy the values from your local `.env` or `.env.local` file.
        *   Add keys like `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, etc.
    *   Click **Deploy**.

4.  **Add Custom Domain**:
    *   Once deployed, go to **Settings** -> **Domains**.
    *   Enter your domain (e.g., `mushmakers.com`).
    *   Vercel will give you `A` records or `CNAME` records.
    *   Go to your domain provider (Hostinger, GoDaddy, etc.) and update the DNS records as shown by Vercel.
