document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.querySelector(".create-button");
    const form = document.querySelector(".test-case-form");
    const testCaseContainer = document.querySelector(".test-case-container");
    const clearAllButton = document.querySelector(".clear-all-button");
    const savedTestCases = JSON.parse(localStorage.getItem("testCases")) || [];

    // Validation functions
    function validateTestCaseNumber(testCaseNumber) {
        return /^[1-9]\d*$/.test(testCaseNumber);
    }

    function validateRequirements(requirements) {
        return requirements.trim() !== "";
    }

    function validateDates(startDate, endDate) {
        return new Date(startDate) < new Date(endDate);
    }

    savedTestCases.forEach(testCaseData => {
        const testCaseElement = createTestCaseElement(testCaseData);
        testCaseContainer.appendChild(testCaseElement);
    });

    createButton.addEventListener("click", function() {
        form.classList.toggle("active");
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const testCaseNumber = form.querySelector("#test-case-number").value;
        const requirements = form.querySelector("#requirements").value;
        const startDate = form.querySelector("#start-date").value;
        const endDate = form.querySelector("#end-date").value;

        // Validation
        const isTestCaseNumberValid = validateTestCaseNumber(testCaseNumber);
        const isRequirementsValid = validateRequirements(requirements);
        const areDatesValid = validateDates(startDate, endDate);

        if (!isTestCaseNumberValid) {
            alert("Invalid Test Case Number. Please enter a positive integer.");
        } else if (!isRequirementsValid) {
            alert("Requirements cannot be empty.");
        } else if (!areDatesValid) {
            alert("Invalid date range. End Date must be after Start Date.");
        } else {
            const testCaseData = { testCaseNumber, requirements, startDate, endDate };
            savedTestCases.push(testCaseData);
            localStorage.setItem("testCases", JSON.stringify(savedTestCases));

            const testCaseElement = createTestCaseElement(testCaseData);
            testCaseContainer.appendChild(testCaseElement);

            form.reset();
        }
    });

    form.querySelector(".clear-button").addEventListener("click", function(event) {
        event.preventDefault();
        form.reset();
    });

    function createTestCaseElement(data) {
        const testCaseElement = document.createElement("div");
        testCaseElement.classList.add("test-case");
        testCaseElement.innerHTML = `
            <strong>Test Case Number:</strong> ${data.testCaseNumber}<br>
            <strong>Requirements:</strong> ${data.requirements}<br>
            <strong>Start Date:</strong> ${data.startDate}<br>
            <strong>End Date:</strong> ${data.endDate}
        `;
        return testCaseElement;
    }
    clearAllButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to clear all test cases?")) {
            localStorage.removeItem("testCases");
            testCaseContainer.innerHTML = ""; // Clear the displayed test cases
        }
    });
});
