export function slider() {
  const range = document.getElementById('range');
  const rangeValue = document.getElementById('range-value');

  if (range && rangeValue) {
    range.addEventListener('input', () => {
      rangeValue.textContent = `${range.value}%`;
    });
  }
}