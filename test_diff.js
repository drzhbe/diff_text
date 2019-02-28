function test(a, b) {
  console.log(diff(a, b));
  const row = DOM.element({type: 'div', attrs: {className: 'row'}});
  row.appendChild(render(create({t: 0, c: a, b: diff(a, b)})));
  row.appendChild(render(create({t: 0, c: b, b: diff(b, a)})));
  document.body.appendChild(row);
}

test('hello', 'hello');
test('hello', 'hallo');
test('hello', 'heello');
test('hello', 'hllo');
// test('hello', 'has illo');
