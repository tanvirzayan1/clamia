
async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value;
    if (!message) return;

    const container = document.getElementById("chat-container");

    // Show user message
    const userMessage = document.createElement("div");
    userMessage.className = "message";
    userMessage.textContent = message;
    container.appendChild(userMessage);

    // Clear input
    input.value = "";

    // Send to backend
    const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });

    const data = await res.json();

    // Show AI response
    const aiMessage = document.createElement("div");
    aiMessage.className = "message ai";
    aiMessage.textContent = data.ai_response;
    container.appendChild(aiMessage);

    container.scrollTop = container.scrollHeight;
}
