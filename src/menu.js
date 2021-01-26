export function menu() {
  document.querySelector('#menu').innerHTML = `
    <h2>Here's Our Menu:</h2>
    <ul>
      <li>Cheeseburger: $15</li>
      <li>A deep-fried whale: $9</li>
      <li>Alcohol: $10</li>
      <li>Water: $20</li>
    </ul>
  `;
}