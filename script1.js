document.getElementById('changeMessageBtn').addEventListener('click', function() {
  const messages = [
    'Semoga tidur kamu nyenyak!',
    'Mimpi indah ya!',
    'Selamat beristirahat!',
    'Nikmati malam yang tenang sayanggku!'
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.querySelector('.sub-message').textContent = randomMessage;
});
