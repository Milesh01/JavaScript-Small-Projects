
document.addEventListener('DOMContentLoaded', function () {
  const nightModeToggle = document.getElementById('nightModeToggle');

  nightModeToggle.addEventListener('change', function () {
      document.body.classList.toggle('night-mode', nightModeToggle.checked);
  });
});

  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('previous-operation').innerText = '';
  }

  function calculate() {
    try {
      const previousOperation = document.getElementById('display').value;
      document.getElementById('previous-operation').innerText = `${previousOperation}`;
      document.getElementById('display').value = eval(previousOperation);
    } catch (error) {
      document.getElementById('display').value = 'Error';
      document.getElementById('previous-operation').innerText = '';
    }
  }