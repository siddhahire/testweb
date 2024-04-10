document.getElementById("fetchData").addEventListener("click", fetchData);

function fetchData() {
    fetch("/data")
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").textContent = data.message;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
