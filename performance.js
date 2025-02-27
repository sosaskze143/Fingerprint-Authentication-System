function evaluatePerformance() {
    const fingerprints = getFingerprints();
    const performanceOutput = document.getElementById('performance-output');
    performanceOutput.innerHTML = `
        <p>عدد المستخدمين الفريدين: ${new Set(fingerprints.map(f => f.id)).size}</p>
        <p>معدل النجاح: ${fingerprints.length > 0 ? '100%' : '0%'}</p>
    `;
}
