# Google Apps Script for Automated Document Generation

## Overview
This Google Apps Script automates the process of generating customized documents from a template. It replaces placeholders in a Google Document with data retrieved from a Google Spreadsheet, streamlining the creation of personalized documents such as letters, invoices, or reports.

## Features
- **Escaping Special Characters**: Enhances script reliability by escaping special characters in placeholder strings.
- **Dynamic Placeholder Replacement**: Automates the substitution of placeholders in both the content and title of a Google Document.
- **Error Handling**: Gracefully handles errors to prevent script crashes, particularly in string processing.

## Prerequisites
- Access to Google Drive with permissions to create and edit Google Docs and Sheets.
- Familiarity with Google Drive and Script Editor interfaces.

## Setup Instructions
1. **Prepare Google Sheet**:
   - Create a new Google Sheet.
   - In the first row, input the placeholders (e.g., `${NAME}`, `${EVENT_DATE}`).
   - In the second row, enter the values that correspond to each placeholder.

2. **Create Document Template**:
   - Create a Google Document to serve as a template.
   - Insert placeholders in the document where replacements are needed.

3. **Script Configuration**:
   - Open Google Script Editor from your Google Sheet.
   - Paste the provided script into the editor.
   - Modify the `sheetId`, `templateDocId`, and `outputFolderId` variables with the IDs of your respective Google Sheet, Document template, and an output folder in Google Drive.

## How to Use
1. **Run the Script**:
   - In the Script Editor, execute the `replacePlaceholders` function.
   - The script will create a copy of your template in the specified folder.
   - It then replaces all instances of placeholders in the document with the values from your Google Sheet.

2. **Check Output**:
   - After the script runs, navigate to the designated output folder.
   - Open the newly created document to verify the replacements.

## Detailed Explanation of Functions
1. **`escapeRegExp(string)`**:
   - Purpose: Escapes special characters in a string to ensure correct processing by the RegExp engine.
   - Process: It replaces characters like `*`, `+`, `?`, `^`, etc., with escaped versions.

2. **`replacePlaceholders()`**:
   - Retrieves data from a specified Google Sheet.
   - Makes a copy of a designated template document.
   - Iteratively replaces placeholders in the document's body and title with the corresponding data from the Sheet.
   - Saves the updated document in a specified output folder.

## Example
- **Google Sheet Content**:
  - Row 1: `CLIENT_NAME`, `PROJECT_NAME`
  - Row 2: `Alice Johnson`, `Alpha Project`

- **Template Document**:
  - Text includes: "Dear ${CLIENT_NAME}, we are excited about ${PROJECT_NAME}."

- **Output Document**:
  - Text becomes: "Dear Alice Johnson, we are excited about Alpha Project."

## Error Handling and Troubleshooting
- The script includes a try-catch block in `escapeRegExp` to handle any unexpected errors during string processing.
- Common errors to watch out for include incorrect placeholder format in the template or mismatched data in the Google Sheet.
