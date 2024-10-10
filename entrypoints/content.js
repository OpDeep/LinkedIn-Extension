export default defineContentScript({
  matches: ["https://www.linkedin.com/mynetwork/grow*"],
  main() {
    console.log("Content script loaded.");

    // Listen for messages from the popup
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === "startAutomation") {
        startAutomation(sendResponse);
        return true;
      }
    });

    const startAutomation = (sendResponse) => {
      console.log("Starting LinkedIn automation...");

      // Update selector to match buttons with "Invite" in the aria-label
      const connectButtons = document.querySelectorAll(
        'button[aria-label*="Invite"]'
      );
      console.log("Connect buttons found: ", connectButtons);

      if (connectButtons.length === 0) {
        console.log("No connection buttons found.");
        alert("No connection buttons found.");
        sendResponse({ status: false, message: "No connection buttons found" });
        return;
      }

      let processedButtons = 0;
      const totalButtons = connectButtons.length;

      connectButtons.forEach((button, index) => {
        setTimeout(() => {
          if (button) {
            console.log(button);
            button.setAttribute("data-trigger-click", "true");
            button.dispatchEvent(new Event("click", { bubbles: true }));

            const modalSendButton = document.querySelector(
              'button[aria-label="Send now"]'
            );
            if (modalSendButton) modalSendButton.click();

            processedButtons++;

            if (processedButtons === totalButtons) {
              console.log("All connection requests processed.");
              sendResponse({ status: true, message: "Automation completed" });
            }
          }
        }, 2000 * (index + 1)); // 2-second delay between each request
      });
    };
  },
});
