
# LinkedIn Auto Connect Extension

### Objective:
This Chrome Extension is built using the **wxt.dev** framework and **React** to automate connection requests on LinkedIn.

### Assignment Overview:
This extension automates the process of sending LinkedIn connection requests on the "Grow your network" page.

- **Target URL**: [LinkedIn My Network](https://www.linkedin.com/mynetwork/grow/)
- **UI Requirement**: Adds a floating button titled `Connect with All` to the page.
- **Functionality**: When the `Connect with All` button is clicked, the extension automatically triggers a click event on all visible "Connect" buttons, sending connection requests to suggested profiles.
- **Delay**: A 1-3 second delay is included between each connection request to prevent LinkedIn from blocking the account.

### Features:
1. **Connect with All Button**:
   - A floating button labeled "Connect with All" is displayed on the LinkedIn "Grow your network" page.
   
2. **Automated Connections**:
   - When the button is clicked, the extension automatically triggers a click event for all visible "Connect" buttons, sending connection requests to all available profiles.

3. **Safety Delay**:
   - A configurable delay (1-3 seconds) is applied between connection requests to avoid being blocked by LinkedIn for sending requests too quickly.

4. **Edge Case Handling**:
   - If there are no profiles with "Connect" buttons, the extension displays an alert notifying the user that no connectable profiles are available.

### Technologies Used:
- **wxt.dev**: Framework for building Chrome Extensions
- **React**: For the frontend

---

### Installation:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OpDeep/LinkedIn-Extension.git
   ```
   
2. **Install dependencies**:
   Navigate into the project directory and run:
   ```bash
   npm install
   ```

3. **Build the Extension**:
   ```bash
   npm run build
   ```

4. **Load the Extension into Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** in the top-right corner.
   - Click **Load unpacked** and select the `.output` folder from your project directory. 
   - Inside the `.output` folder, choose the `chrome-mv3` folder and load it as the unpacked extension.

---

### Usage:

1. **Navigate to LinkedIn**:
   - Go to the following URL: [LinkedIn My Network](https://www.linkedin.com/mynetwork/grow/)

2. **Click the "Connect with All" Button**:
   - The extension will float a button on the page labeled `Connect with All`.
   - Click the button to start sending connection requests to all visible profiles.

3. **Monitor Progress**:
   - Once clicked, the extension will automatically send connection requests, with a delay between each request.
   - If there are no connectable profiles, an alert will notify you.

---

### Code Structure:

- `content.js`: The content script that interacts with the LinkedIn page to find and trigger the "Connect" buttons.
- `App.js`: The React component that handles the UI, including the "Connect with All" button and loader.
- `manifest.json`: The manifest file that configures permissions, matches URLs, and specifies the content script.

---

### Edge Cases:
- If no "Connect" buttons are found on the page, the extension will notify the user with an alert.
- If LinkedIn's page structure changes, the button selector can be updated accordingly to match the new structure.

---


---

### Contact:
For any issues or feature requests, please open an issue on GitHub.

