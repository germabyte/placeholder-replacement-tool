function escapeRegExp(string) {
  try {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapes special characters
  } catch (e) {
    // Error caught, but not thrown - suppresses the error message
    return '';
  }
}

function replacePlaceholders() {
  var sheetId = '1apxJ4L6OlgJ82XvcGiYJwsj1DqDlBlglitawpslIBBo';
  var templateDocId = '1N7-J5a4-ypgtHSHXNdl6FyZ39nfuz0k2RUz43rm4XSU'; // Template Google Doc ID
  var outputFolderId = '1LCLkU89QLTJl37g5aiSZtQoLjqNoD8_U'; // Replace with your desired output folder ID

  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName('docvars');
  var range = sheet.getRange(1, 1, 2, sheet.getLastColumn());
  var data = range.getDisplayValues();
  var placeholders = data[0];
  var values = data[1];

  // Create a copy of the template document in the specified folder
  var templateDoc = DriveApp.getFileById(templateDocId);
  var outputFolder = DriveApp.getFolderById(outputFolderId);
  var copiedDoc = templateDoc.makeCopy('', outputFolder); // Temporarily leave title blank
  var doc = DocumentApp.openById(copiedDoc.getId());
  var body = doc.getBody();

  // Replace placeholders in the body
  var replacementsMade;
  do {
    replacementsMade = false;
    placeholders.forEach(function(placeholder, index) {
      var escapedPlaceholder = escapeRegExp("${" + placeholder + "}");
      var regex = new RegExp(escapedPlaceholder, 'g');
      if (body.findText(escapedPlaceholder)) {
        body.replaceText(escapedPlaceholder, values[index]);
        replacementsMade = true;
      }
    });
  } while (replacementsMade);

  // Replace placeholders in the title
  var docTitle = templateDoc.getName();
  placeholders.forEach(function(placeholder, index) {
    var escapedPlaceholder = escapeRegExp("${" + placeholder + "}");
    var regex = new RegExp(escapedPlaceholder, 'g');
    docTitle = docTitle.replace(regex, values[index]);
  });
  doc.setName(docTitle); // Update the title

  doc.saveAndClose();
}

// Run this function
replacePlaceholders();
