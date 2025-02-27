const video = document.getElementById('camera');
const captureBtn = document.getElementById('capture-btn');
const output = document.getElementById('output');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error('Error accessing the camera: ', err);
    });

captureBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // عرض الصورة الملتقطة
    const img = document.createElement('img');
    img.src = imageData;
    output.innerHTML = '';
    output.appendChild(img);

    // يمكنك هنا إضافة المزيد من المعالجة للصورة
    // مثل تحويلها إلى تدرج رمادي أو إرسالها إلى خدمة خارجية
});
