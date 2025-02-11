function addEmployee() {
    // Use prompt to collect data for each field
    var name = prompt("Enter the employee's name:");
    var age = prompt("Enter the employee's age:");
    var id = prompt("Enter the employee's ID:");
    var position = prompt("Enter the employee's position:");
    var district = prompt("Enter the employee's district:");
    var salary = prompt("Enter the employee's salary:");

    // Validate that all inputs are provided
    if (name && age && id && position && district && salary) {
        // Access the table body
        var tableBody = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];

        // Create a new row
        var newRow = tableBody.insertRow();

        // Insert new cells into the row
        var cell1 = newRow.insertCell(0); // Name
        var cell2 = newRow.insertCell(1); // Age
        var cell3 = newRow.insertCell(2); // ID
        var cell4 = newRow.insertCell(3); // Position
        var cell5 = newRow.insertCell(4); // District
        var cell6 = newRow.insertCell(5); // Salary

        // Add data to each cell
        cell1.innerHTML = name;
        cell2.innerHTML = age;
        cell3.innerHTML = id;
        cell4.innerHTML = position;
        cell5.innerHTML = district;
        cell6.innerHTML = salary;
    } else {
        alert("All fields must be filled out!");
    }
}