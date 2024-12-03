document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const output = document.getElementById("output");
    const themeToggle = document.getElementById("theme-toggle");

    // Theme Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.innerHTML = document.body.classList.contains("dark-mode")
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    });

    // Disable Copy-Paste in Editor
    editor.addEventListener("copy", (event) => {
        event.preventDefault();
        alert("Copying is disabled in the editor!");
    });

    editor.addEventListener("paste", (event) => {
        event.preventDefault();
        alert("Pasting is disabled in the editor!");
    });

    // Clear Code
    document.getElementById("clear-code").addEventListener("click", () => {
        editor.value = "";
    });

    // Clear Output
    document.getElementById("clear-output").addEventListener("click", () => {
        output.textContent = "Output will be displayed here...";
    });

    // Download Code
    document.getElementById("download-code").addEventListener("click", () => {
        const blob = new Blob([editor.value], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "code.txt";
        link.click();
        URL.revokeObjectURL(url);
    });

    // Run Code (mocked execution for demo purposes)
    document.getElementById("run-code").addEventListener("click", () => {
        const language = document.getElementById("language-selector").value;
        const code = editor.value;
        if (code.trim() === "") {
            output.textContent = "Please write some code to run.";
        } else {
            output.textContent = `Running ${language} code...\n\n${code}`;
        }
    });

    // Submit Code (mocked behavior for demo)
    document.getElementById("submit-code").addEventListener("click", () => {
        alert("Code submitted successfully!");
    });
});
