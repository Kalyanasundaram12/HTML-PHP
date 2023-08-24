// script.js
import jsPDF from 'jspdf';
const testPlanForm = document.getElementById('testPlanForm');
const testPlanOutput = document.getElementById('testPlanOutput');

testPlanForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
  // Collect form input values for Document Information
  const documentTitle = document.getElementById('documentTitle').value;
  const documentVersion = document.getElementById('documentVersion').value;
  // Collect other Document Information input values similarly
  
  // Collect form input values for Introduction
  const briefOverview = document.getElementById('briefOverview').value;
  const purpose = document.getElementById('purpose').value;
  // Collect other Introduction input values similarly
  
  // Collect form input values for Test Strategy
  const testingApproach = document.getElementById('testingApproach').value;
  const testingLevels = document.getElementById('testingLevels').value;
  // Collect other Test Strategy input values similarly
  
  // Collect form input values for Risk Assessment
  const potentialRisks = document.getElementById('potentialRisks').value;
  const riskImpact = document.getElementById('riskImpact').value;
  // Collect other Risk Assessment input values similarly
  
  // Collect form input values for Test Deliverables
  const testArtifacts = document.getElementById('testArtifacts').value;
  const testDataRequirements = document.getElementById('testDataRequirements').value;
  // Collect other Test Deliverables input values similarly
  
  // Collect form input values for Test Case Specification
  const testCaseIDs = document.getElementById('testCaseIDs').value;
  const testCaseDescriptions = document.getElementById('testCaseDescriptions').value;
  // Collect other Test Case Specification input values similarly
  
  // Collect form input values for Test Execution Plan
  const executionApproach = document.getElementById('executionApproach').value;
  const entryExitCriteria = document.getElementById('entryExitCriteria').value;
  // Collect other Test Execution Plan input values similarly
  
  // Collect form input values for Defect Management
  const defectProcess = document.getElementById('defectProcess').value;
  const defectSeverity = document.getElementById('defectSeverity').value;
  // Collect other Defect Management input values similarly
  
  // Collect form input values for Test Metrics and Reporting
  const metrics = document.getElementById('metrics').value;
  const reportingFreq = document.getElementById('reportingFreq').value;
  // Collect other Test Metrics and Reporting input values similarly
  
  // Collect form input values for Dependencies
  const otherTeams = document.getElementById('otherTeams').value;
  const thirdParty = document.getElementById('thirdParty').value;
  // Collect other Dependencies input values similarly
  
  // Collect form input values for Approvals
  const signOff = document.getElementById('signOff').value;
  // Collect other Approvals input values similarly
  
  // Collect form input values for Change Management
  const changeProcess = document.getElementById('changeProcess').value;
  // Collect other Change Management input values similarly
  
  // Collect form input values for Test Exit Criteria
  const exitCriteria = document.getElementById('exitCriteria').value;
  // Collect other Test Exit Criteria input values similarly
  
  // Use these values to generate the Test Plan content
  const testPlanContent = `
    Document Title: ${documentTitle}
    Document Version: ${documentVersion}
    ...
    Brief Overview of the Project: ${briefOverview}
    Purpose of the Test Plan: ${purpose}
    ...
    Testing Approach: ${testingApproach}
    Testing Levels: ${testingLevels}
    ...
    Identification of Potential Risks and Mitigation Strategies: ${potentialRisks}
    Impact and Likelihood Assessment: ${riskImpact}
    ...
    List of Test Artifacts to be Produced: ${testArtifacts}
    Test Data Requirements: ${testDataRequirements}
    ...
    Test Case IDs: ${testCaseIDs}
    Test Case Descriptions: ${testCaseDescriptions}
    ...
    Test Execution Approach: ${executionApproach}
    Entry and Exit Criteria for Testing Phases: ${entryExitCriteria}
    ...
    Defect Reporting and Tracking Process: ${defectProcess}
    Severity and Priority Definitions: ${defectSeverity}
    ...
    Metrics to Measure Test Progress and Quality: ${metrics}
    Reporting Frequency and Format: ${reportingFreq}
    ...
    Dependencies on Other Teams or Components: ${otherTeams}
    Third-Party Integrations: ${thirdParty}
    ...
    Sign-off Requirements for Different Testing Phases: ${signOff}
    ...
    Process for Handling Changes to the Test Plan: ${changeProcess}
    ...
    Conditions to Determine When Testing Should Stop: ${exitCriteria}
  `;
  
  // Create a new jsPDF instance
var pdf = new jsPDF();

// Split the testPlanContent into lines
const lines = pdf.splitTextToSize(testPlanContent, 180);

// Loop through each line and add it to the PDF
for (let i = 0; i < lines.length; i++) {
    pdf.text(20, 20 + (i * 10), lines[i]);
}

// Save the PDF as a downloadable file
pdf.save('test_plan.pdf');


  // Display the generated Test Plan content
  testPlanOutput.innerHTML = `<pre>${testPlanContent}</pre>`;
  testPlanOutput.classList.remove('hidden');

});
