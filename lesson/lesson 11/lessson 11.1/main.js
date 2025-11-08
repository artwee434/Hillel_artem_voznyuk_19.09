const n = 10; 
const table = document.getElementById("pifagor");

for (let i = 1; i <= n; i++) {
  const row = document.createElement("tr");

  for (let j = 1; j <= n; j++) {
    const cell = document.createElement("td");
    cell.textContent = i * j; 
    row.appendChild(cell);
  }

  table.appendChild(row);
}
