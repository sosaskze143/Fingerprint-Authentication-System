function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('تم تسجيل الدخول بنجاح!');
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
    }
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('تم تسجيل حساب جديد بنجاح!');
}
