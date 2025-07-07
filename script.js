
async function getData() {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

async function getId() {
    const input = document.getElementById("id").value;
    const count = parseInt(input);
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = ""; // Clear previous

    if (isNaN(count) || count <= 0) {
        console.log("Please enter a valid positive number.");
        resultDiv.innerHTML = "<p>Please enter a valid positive number.</p>";
        return;
    }

    const data = await getData();

    if (data && data.length) {
        console.log(`--- First ${count} Posts ---`);
        for (let i = 0; i < count && i < data.length; i++) {
            const post = data[i];
            console.log(`${i + 1}. [ID: ${post.id}] Title: ${post.title}`);
            resultDiv.innerHTML += `<p><strong>${i + 1}.</strong> [ID: ${post.id}] Title: ${post.title}</p>`;
        }
    } else {
        console.log("No data received from API.");
        resultDiv.innerHTML = "<p>No data found.</p>";
    }
}





