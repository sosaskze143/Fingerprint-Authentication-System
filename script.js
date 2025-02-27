document.addEventListener('DOMContentLoaded', () => {
    // تهيئة الكاميرا
    const video = document.getElementById('camera');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error('Error accessing the camera: ', err);
        });

    // تهيئة الأحداث
    document.getElementById('capture-btn').addEventListener('click', captureFingerprint);
    document.getElementById('login-btn').addEventListener('click', login);
    document.getElementById('register-btn').addEventListener('click', register);
});
