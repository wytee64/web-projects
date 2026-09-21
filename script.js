async function loadMarkdown() {

    const content = document.getElementById("content");

    try {

        // Load README.md
        const response = await fetch("./README.md");

        if (!response.ok) {
            throw new Error(
                `Unable to load README.md. HTTP status: ${response.status}`
            );
        }

        // Read Markdown text
        const markdownText = await response.text();

        // Convert Markdown -> HTML
        const htmlContent = marked.parse(markdownText);

        // Display rendered Markdown
        content.innerHTML = htmlContent;

    } catch (error) {

        console.error(error);

        content.innerHTML = `
            <div class="error-box">

                <h3>README could not be loaded</h3>

                <p>
                    ${error.message}
                </p>

                <p>
                    Make sure <code>README.md</code>
                    is inside the same folder as
                    <code>index.html</code>.
                </p>

                <p>
                    Also make sure you are running the page
                    through a local web server instead of opening
                    the HTML file directly.
                </p>

            </div>
        `;
    }
}

loadMarkdown();
