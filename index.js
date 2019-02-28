const types = {
  text: 0,
};
const create = ({t, c, b}) => {
  switch (t) {
    case types.text:
      return {
        t: 0,
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        c: c || '',
        b,
        // b: [
        //   {
        //     s: 0,
        //     n: 0,
        //     c: 'skyblue',
        //     f: 'monospace',
        //   },
        // ],
      };
    default:
      throw new Error(`Function "create" doesn't support type "${type}"`);
  }
};

const render = ({t, c, b}) => {
  switch (t) {
    case types.text:
      const lineWidth = 50;
      const children = [];
      let lastEnd = 0;
      for (let i = 0; i < b.length; i++) {
        const {start, count} = b[i];
        const end = start + count;
        children.push(c.slice(lastEnd, start));
        children.push({
          type: 'span',
          attrs: {className: 'highlight'},
          children: [c.slice(start, end)],
        });
        lastEnd = end;
      }
      if (b.length) {
        // Take the text after last bucket
        const lastBucket = b[b.length - 1];
        children.push(c.slice(lastBucket.start + lastBucket.count))
      } else {
        children.push(c);
      }
      return DOM.element({
        type: 'div',
        attrs: {className: 'code'},
        children,
      });
    default:
      throw new Error(`Function "render" doesn't support type "${type}"`);
  }
};

const seq = (a, b, i, j) => {

};

const diff = (a, b) => {
  const resultA = [];
  const resultB = [];
  let diffA = { start: -1, count: 0 };
  let diffB = { start: -1, count: 0 };
  const l = Math.max(a.length, b.length);
  for (let i = 0; i < l; i++) {
    const x = a[i];
    const y = b[i];

    if (x !== y) {
      diffA.start = i;
      for (let j = i; j < l; j++) {

      }
    }
  }
  return { resultA, resultB };
  // for (let i=j=0; i<a.length;) {
  //   if (j >= b.length) {
  //     j = i;
  //     i++;
  //   }
  //   if (a[i] !== b[j]) {
  //     if (currentDiff.start === -1) {
  //       currentDiff.start = i;
  //     }
  //     currentDiff.count += 1;
  //     continue;
  //   }

  //   i++;
  //   if (currentDiff.count) {
  //     j++;
  //     diffA.push(currentDiff);
  //     currentDiff = { start: -1, count: 0 };
  //   }
  // }
  // return diffA;
};

// const row = DOM.element({type: 'div', attrs: {className: 'row'}});
// // const A = '<canvas onmousemove="with(event)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(getContext`2d`[j.src?`drawImage`:`fillText`](...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))">';
// // const B = '<canvas onmousemove="with(event)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&getContext`2d`[j.src?`drawImage`:`fillText`](...t)||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&(e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9])">';
// const A = '<body><script>l=addEventListener;d=document;f=(i)=>Math.abs(i);C=d.body.appendChild(d.createElement`canvas`).getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))});</script></body>';
// const B = '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])" onload="l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[1]-e.x)<9&&f(v[2]-e.y)<9));l(`mouseup`,e=>[S[1],S[2]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})"><canvas id=`X`>';
// row.appendChild(render(create({t: 0, c: A, b: diff(A, B)})));
// row.appendChild(render(create({t: 0, c: B, b: diff(B, A)})));
// document.body.appendChild(row);

// console.log(diff(A, B));

