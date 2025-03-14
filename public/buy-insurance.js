document.getElementById("buy-insurance-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.target);
    const data = {
        firstName: formData.get("first-name"),
        lastName: formData.get("last-name"),
        companyName: formData.get("company-name"),
        insuranceType: formData.get("insurance-type"),
        coverageAmount: parseInt(formData.get("coverage-amount")),
        industrySector: formData.get("industry-sector"),
        engagementLevel: formData.get("industry-sector") === "Technology" ? "high" : "medium", // Example logic
        status: "Pending",
        applicationDate: formData.get("start-date")
    };
    console.log(data);


    try {
        const response = await fetch('http://localhost:3000/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        console.log("Response:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Success:", result);
        
        document.getElementById('thank-you-message').style.display = 'block';
        e.target.reset();
    } catch (error) {
        console.error("Error submitting application:", error);
        alert("Error submitting application. Please try again later.");
    }
});
// document.getElementById('buy_insurance_form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Optional: prevents default submission (e.g., page reload)
//     // Add your form submission logic here (e.g., AJAX call to server)
//     // On success:
//     displayThankYouMessage();
// });

function displayThankYouMessage() {
    document.getElementById('thank-you-message').style.display = 'block';
}
