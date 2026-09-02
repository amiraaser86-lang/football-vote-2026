// بيانات التصويت
const votes = {
    goalkeeper: 0,
    defender: 0,
    midfielder: 0,
    striker: 0,
    libero: 0
};

// عناصر النتائج
const resultElements = {
    goalkeeper: document.getElementById('goalkeeper-result'),
    defender: document.getElementById('defender-result'),
    midfielder: document.getElementById('midfielder-result'),
    striker: document.getElementById('striker-result'),
    libero: document.getElementById('libero-result')
};

// تحديث النتائج
function updateResults() {
    for (const role in votes) {
        resultElements[role].textContent = `${votes[role]} صوت`;
    }
}

// معالجة التصويت
document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click', function() {
        const role = this.getAttribute('data-role');
        const player = this.getAttribute('data-player');

        // تحديث الأصوات
        votes[role]++;

        // تحديث النتيجة
        updateResults();

        // تعطيل الزر بعد التصويت
        this.disabled = true;
        this.textContent = 'تم التصويت';

        // رسالة تأكيد
        alert(`تم التصويت لصالح ${player} في دور ${role === 'goalkeeper' ? 'حارس المرمى' :
              role === 'defender' ? 'الدفاع' :
              role === 'midfielder' ? 'الوسط' :
              role === 'striker' ? 'الهجوم' : 'اللاعب الحر'}!`);
    });
});

// تحديث النتائج عند تحميل الصفحة
updateResults();