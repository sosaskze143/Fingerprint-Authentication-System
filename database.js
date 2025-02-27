// تخزين بيانات البصمات
function saveFingerprint(imageData) {
    const fingerprints = JSON.parse(localStorage.getItem('fingerprints')) || [];
    fingerprints.push({ id: fingerprints.length + 1, image: imageData, timestamp: new Date() });
    localStorage.setItem('fingerprints', JSON.stringify(fingerprints));
}

// استرجاع بيانات البصمات
function getFingerprints() {
    return JSON.parse(localStorage.getItem('fingerprints')) || [];
}
