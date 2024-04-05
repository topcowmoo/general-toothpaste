const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered events
  console.log("beforeinstallprompt fired");
  console.log(event);
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async (event) => {
  // console.log(event);
  const promptEvent = window.deferredPrompt;
  // console.log(promptEvent);
  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
