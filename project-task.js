/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- The starter code contains deliberate errors related to standard exceptions. 
- Run the starter code and identify the standard exceptions being thrown.
- Correct the issues and observe output  

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred
-  Use a finally block to simulate closing the file handle or releasing resources, 
    ensuring this happens even if an exception is thrown.

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
-Test the program with different types of inputs to 
  trigger exceptions and confirm the finally block executes consistently. 
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
   try { // input validation: 
     if (!fileName) {
        throw new ReferenceError ("ReferenceError: File name is missing.");
      }
      else if (typeof(fileData) !== "string") {
        throw new TypeError ("TypeError: File data must be a string.");
      }
      else if (!fileData) {
        throw new Error ("Error: File data cannot be empty.");
      }

    // Simulated file processing 
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    console.log(`Reading ${fileName}.`);
    console.log(`Writing "${fileData}" to disk.`);
       
  } catch (err) { //error handling implemented
    console.log(err.message);
  } finally { //finally block to close resources
    console.log(`Closing and releasing resources.`);

  }
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing.  
processFile("",""); // ❌ ReferenceError: File name is missing.  
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string. 
processFile("myFile.txt", false); // ❌ TypeError: File data must be a string. 
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty. 
processFile("myFile.txt"); // ❌ TypeError: File data must be a string.  
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully.
processFile("project-task.js", "My coding homework!"); // ✅ Should process successfully.
//adding a line to test branching