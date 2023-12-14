# Google Apps Script for Automated Document Generation

## Overview
This Google Apps Script automates the process of replacing placeholders in a Google Document using values sourced from a Google Spreadsheet. It's designed to handle nested placeholders, effectively "unpacking" them until all placeholders are replaced.

## Prerequisites
1. Google Account with access to Google Drive, Docs, and Sheets.
2. Basic understanding of Google Apps Script.

## Setup
1. **Spreadsheet Creation**: Create a Google Spreadsheet with two rows.
   - **Row 1**: Placeholders (e.g., `placeholder1`, `placeholder2`).
   - **Row 2**: Corresponding values for these placeholders.

2. **Document Template**: Create a Google Doc as a template. Include placeholders in the format `${placeholder}`.

3. **Script Project**: Open Google Apps Script and link it to your Google Drive. Copy-paste the provided script into the script editor.

4. **Update Script Constants**:
   - `sheetId`: ID of your Google Spreadsheet.
   - `templateDocId`: ID of your Google Document template.
   - `outputFolderId`: ID of the Google Drive folder where you want the processed document saved.

## How the Script Works
1. **Initial Setup**: The script reads the placeholders and their corresponding values from the specified Google Spreadsheet.

2. **Document Copying**: It makes a copy of the template Google Document in the specified output folder.

3. **Placeholder Replacement**:
   - The script iteratively scans the document body for placeholders.
   - If a placeholder is found, it's replaced with its corresponding value.
   - This process repeats until no more placeholders are found, effectively handling nested placeholders.

4. **Title Update**: The script also replaces placeholders in the document title.

5. **Saving**: The updated document is saved and closed.

## Example Usage
### Initial Setup
- **Spreadsheet**: 
  - `Row 1`: `placeholder1`, `placeholder2`, `placeholder3`
  - `Row 2`: `${placeholder2} and ${placeholder3}`, `Value2`, `Value3`

- **Google Doc Template**: 
  - Contains the text: "This is a test document with ${placeholder1}."

### Running the Script
1. Execute the `replacePlaceholders()` function.

### Outcome
- **First Iteration**: `${placeholder1}` in the Google Doc is replaced with `${placeholder2} and ${placeholder3}`.
- **Second Iteration**: 
  - `${placeholder2}` is replaced with `Value2`.
  - `${placeholder3}` is replaced with `Value3`.
- **Final Document**: 
  - Text reads: "This is a test document with Value2 and Value3."

## Notes
- Ensure the placeholders in the Google Spreadsheet exactly match those in the Google Doc template.
- The script only processes the first two rows of the Spreadsheet for placeholders and values.
- The script can handle complex nested placeholders, but the structure must be consistent between the Spreadsheet and the Google Doc.

## Troubleshooting
- **Placeholder Not Replaced**: Ensure the placeholder in the Spreadsheet and Google Doc match exactly.
- **Script Errors**: Check for correct IDs for the Spreadsheet, Document, and Output Folder.
- **Permission Issues**: Make sure you have edit access to all relevant files and folders.

## Upcoming Enhancement
The next phase of development for this script is focused on enabling batch processing of multiple documents. This will involve iterating over a series of document templates and possibly multiple rows in the spreadsheet for different sets of values. The goal is to create a more robust system capable of automating document creation on a larger scale, saving even more time and reducing manual effort.
