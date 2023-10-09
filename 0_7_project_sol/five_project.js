const insert = document.querySelector('#insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `<div class=color>
  <table>
  <tr>
  <th>key</th>
  <th>key Code</th>
  <th>Code</th>
  <tr>
  <tr>
  <th>${e.key === '' ? 'Space' : e.key}</th>
  <th>${e.keyCode}</th>
  <th>${e.code}</th>
  </tr>
  </table>
  </div>`;
});
