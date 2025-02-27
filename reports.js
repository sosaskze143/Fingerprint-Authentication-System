function generateReports() {
    const fingerprints = getFingerprints();
    const reportsOutput = document.getElementById('reports-output');
    reportsOutput.innerHTML = `<p>عدد البصمات المسجلة: ${fingerprints.length}</p>`;
}
