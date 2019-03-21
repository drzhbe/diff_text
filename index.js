const state = {
  domToSig: new Map(),
  explanation: [
    [
      'HAHAH',
      create({
        "c": "<body><script>l=addEventListener;d=document;f=(i)=>Math.abs(i);C=d.body.appendChild(d.createElement`canvas`).getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))});</script></body>",
        "b": [
          [0,6,0],
          [6,14,1],
          [14,457,0],
          [457,474,1],
        ],
      }),
    ],
  ],
  pages: [
    [
      'No script, no closing tags',
      create({
        "c": "<body><script>l=addEventListener;d=document;f=(i)=>Math.abs(i);C=d.body.appendChild(d.createElement`canvas`).getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))});</script></body>",
        "b": [
          [0,6,0],
          [6,14,1],
          [14,457,0],
          [457,474,1],
        ],
      }),
      create({
        "c": "<body onload='l=addEventListener;d=document;f=(i)=>Math.abs(i);C=d.body.appendChild(d.createElement`canvas`).getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'>",
        "b": [
          [0,6,0],
          [6,14,1],
          [14,457,0],
          [457,458,1],
          [458,459,0],
        ],
      }),
    ],
    [
      'Create static elements in HTML, not JS',
      create({
        "c": "<body onload='l=addEventListener;d=document;f=(i)=>Math.abs(i);C=d.body.appendChild(d.createElement`canvas`).getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'>",
        "b": [
          [0,33,0],
          [33,44,1],
          [44,65,0],
          [65,108,1],
          [108,474,0],
        ]
      }),
      create({
        "c": "<body onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'><canvas id=`X`>",
        "b": [
          [0,54,0],
          [54,55,1],
          [55,406,0],
          [406,421,1],
        ],
      }),
    ],
    [
      'onhashchange → inlined onfocus',
      create({
        "c": "<body onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'><canvas id=`X`>",
        "b": [
          [0,76,0],
          [76,93,1],
          [93,177,3],
          [177,179,1],
          [179,421,0],
        ],
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'><canvas id=`X`>",
        "b": [
          [0,6,0],
          [6,15,1],
          [15,99,3],
          [99,100,1],
          [100,413,0],
        ],
      }),
    ],
    [
      'object → array + destructure',
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'><canvas id=`X`>",
        "b": [
          [0,40,0],
          [40,46,3],
          [46,47,0],
          [47,50,1],
          [50,87,0],
          [87,89,1],
          [89,92,0],
          [92,94,1],
          [94,96,0],
          [96,98,1],
          [98,190,0],
          [190,196,3],
          [196,202,0],
          [202,205,1],
          [205,217,0],
          [217,220,1],
          [220,247,0],
          [247,250,1],
          [250,251,0],
          [251,254,1],
          [254,308,0],
          [308,313,3],
          [313,314,0],
          [314,315,1],
          [315,324,0],
          [324,327,1],
          [327,351,0],
          [351,362,1],
          [362,381,0],
          [381,392,1],
          [392,413,0],
        ],
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],30,30])' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<30&&f(v[1]-e.y)<30));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,40,0],
          [40,46,3],
          [46,47,0],
          [47,48,1],
          [48,90,0],
          [90,91,1],
          [91,183,0],
          [183,189,3],
          [189,195,0],
          [195,199,1],
          [199,211,0],
          [211,215,1],
          [215,242,0],
          [242,246,1],
          [246,247,0],
          [247,251,1],
          [251,305,0],
          [305,310,3],
          [310,311,0],
          [311,320,1],
          [320,329,0],
          [329,330,1],
          [330,354,0],
          [354,359,1],
          [359,378,0],
          [378,383,1],
          [383,404,0],
        ],
      }),
    ],
    [
      'numbers → max digits',
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],30,30])' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<30&&f(v[1]-e.y)<30));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,85,0],
          [85,87,1],
          [87,88,0],
          [88,90,1],
          [90,205,0],
          [205,207,1],
          [207,221,0],
          [221,223,1],
          [223,404,0],
        ],
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,85,0],
          [85,86,1],
          [86,87,0],
          [87,88,1],
          [88,203,0],
          [203,204,1],
          [204,218,0],
          [218,219,1],
          [219,400,0],
        ],
      }),
    ],
    [
      'Simple Math.abs',
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,119,0],
          [119,126,3],
          [126,137,1],
          [137,400,0],
        ],
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,119,0],
          [119,126,3],
          [126,134,1],
          [134,397,0],
        ],
      }),
    ],
    [
      'Check if Image',
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,315,0],
          [315,334,1],
          [334,397,0],
        ],
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,315,0],
          [315,320,1],
          [320,383,0],
        ],
      }),
    ],
    [
      'clearRect → canvas.height',
      create({
        "c": '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])" onload="l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[1]-e.x)<9&&f(v[2]-e.y)<9));l(`mouseup`,e=>[S[1],S[2]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})"><canvas id=`X`>',
        "b": [
          [0,273,0],
          [273,297,1],
          [297,383,0],
        ],
      }),
      create({
        "c": '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])" onload="l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[1]-e.x)<9&&f(v[2]-e.y)<9));l(`mouseup`,e=>[S[1],S[2]]=[e.x,e.y]);setInterval(_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})"><canvas id=`X`>',
        "b": [
          [0,273,0],
          [273,285,1],
          [285,371,0],
        ],
      }),
    ],
    [
      'rm setInterval → declare render',
      create({
        "c": '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])" onload="l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[1]-e.x)<9&&f(v[2]-e.y)<9));l(`mouseup`,e=>[S[1],S[2]]=[e.x,e.y]);setInterval(_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})"><canvas id=`X`>',
        "b": [
          [0,257,0],
          [257,269,1],
          [269,353,0],
          [353,354,1],
          [354,371,0],
        ],
      }),
      create({
        "c": '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[1]-e.x)<9&&f(v[2]-e.y)<9));l(`mouseup`,e=>{[S[1],S[2]]=[e.x,e.y];r()})"><canvas id=`X`>',
        "b": [
          [0,90,0],
          [90,94,1],
          [94,104,0],
          [104,106,1],
          [106,190,0],
          [190,191,1],
          [191,325,0],
          [325,326,1],
          [326,348,0],
          [348,352,1],
          [352,370,0],
        ],
      }),
    ],
    [
      'rm Math.abs (oops)',
      create({
        "c": '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[1]-e.x)<9&&f(v[2]-e.y)<9));l(`mouseup`,e=>{[S[1],S[2]]=[e.x,e.y];r()})"><canvas id=`X`>',
        "b": [
          [0,210,0],
          [210,226,1],
          [226,279,0],
          [279,281,1],
          [281,289,0],
          [289,290,1],
          [290,294,0],
          [294,296,1],
          [296,304,0],
          [304,305,1],
          [305,370,0],
        ],
      }),
      create({c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};l=addEventListener;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9));l(`mouseup`,e=>{[S[1],S[2]]=[e.x,e.y];r()})"><canvas id=`X`>'}),
    ],
    [
      'Simpler update of dragging x,y',
      create({
        c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};l=addEventListener;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9));l(`mouseup`,e=>{[S[1],S[2]]=[e.x,e.y];r()})"><canvas id=`X`>',
        "b": [
          [0,304,0],
          [304,325,1],
          [325,348,0],
        ],
      }),
      create({
        c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};l=addEventListener;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9));l(`mouseup`,e=>{S[1]=e.x,S[2]=e.y;r()})"><canvas id=`X`>',
        "b": [
          [0,304,0],
          [304,321,1],
          [321,344,0],
        ],
      }),
    ],
    [
      'mousedown+mouseup → mousemove',
      create({
        c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};l=addEventListener;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9));l(`mouseup`,e=>{S[1]=e.x,S[2]=e.y;r()})"><canvas id=`X`>',
        "b": [
          [0,190,0],
          [190,193,1],
          [193,209,3],
          [209,210,1],
          [210,234,0],
          [234,251,1],
          [251,286,0],
          [286,303,1],
          [303,326,0],
          [326,327,1],
          [327,344,0],
        ],
      }),
      create({
        c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[];addEventListener(`mousemove`,e=>e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y)&&r())"><canvas id=`X`>',
        "b": [
          [0,215,0],
          [215,231,3],
          [231,247,1],
          [247,254,2],
          [254,257,1],
          [257,292,0],
          [292,295,1],
          [295,314,0],
          [314,316,1],
          [316,319,0],
          [319,320,1],
          [320,337,0],
        ],
      }),
    ],
    [
      'Inline mousemove (so semantic)',
      create({
        c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[];addEventListener(`mousemove`,e=>e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y)&&r())"><canvas id=`X`>',
        "b": [
          [0,214,0],
          [214,247,1],
          [247,319,3],
          [319,320,1],
          [320,337,0],
        ],
      }),
      create({
        c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>',
        "b": [
          [0,5,0],
          [5,30,1],
          [30,102,3],
          [102,104,1],
          [104,329,0],
        ],
      }),
    ],
    [
      'Declan, explain please',
      create({
        c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>',
        "b": [
          [0,52,0],
          [52,74,1],
          [74,329,0],
        ],
      }),
      create({
        c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<81))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>',
        "b": [
          [0,52,0],
          [52,72,1],
          [72,327,0],
        ],
      }),
    ],
    [
      'UX: use max 2 digit number',
      create({
        c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<81))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>',
        "b": [
          [0,70,0],
          [70,72,1],
          [72,327,0],
        ],
      }),
      create({
        c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<99))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>',
        "b": [
          [0,70,0],
          [70,72,1],
          [72,327,0],
        ],
      }),
    ],
    [
      'Kill the body, the soul is immortal',
      create({
        c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<99))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>',
        "b": [
          [0,6,1],
          [6,327,0],
        ],
      }),
      create({
        c: '<canvas id=`X` onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<99))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]">',
      }),
    ],
    [
      'onmousemove alone',
      create({
        c: '<canvas id=`X` onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<99))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]">',
        "b": [
          [0,104,0],
          [104,109,2],
          [109,111,0],
          [111,120,1],
          [120,195,0],
          [195,199,2],
          [199,209,1],
          [209,215,2],
          [215,294,0],
          [294,295,2],
          [295,315,0],
          [315,319,2],
          [319,320,1],
          [320,321,0],
        ],
      }),
      create({
        c: '<canvas id=`X` onmousemove="!window.Z&&(C=X.getContext`2d`,Z=G=[]);(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))">',
        "b": [
          [0,28,0],
          [28,39,2],
          [39,59,0],
          [59,65,2],
          [65,171,0],
          [171,185,2],
          [185,318,0],
        ],
      }),
    ],
    [
      'Spread props in render',
      create({
        c: '<canvas id=`X` onmousemove="!window.Z&&(C=X.getContext`2d`,Z=G=[]);(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))">',
        "b": [
          [0,256,0],
          [256,265,1],
          [265,267,0],
          [267,268,1],
          [268,285,0],
          [285,296,1],
          [296,309,0],
          [309,314,1],
          [314,318,0],
        ],
      }),
      create({
        c: '<canvas id=`X` onmousemove="!window.Z&&(C=X.getContext`2d`,Z=G=[]);(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">',
        "b": [
          [0,256,0],
          [256,257,1],
          [257,259,0],
          [259,263,1],
          [263,280,0],
          [280,290,1],
          [290,303,0],
          [303,307,1],
          [307,311,0],
        ],
      }),
    ],
    [
      'With 🎉',
      create({
        c: '<canvas id=`X` onmousemove="!window.Z&&(C=X.getContext`2d`,Z=G=[]);(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">',
        "b": [
          [0,67,0],
          [67,85,1],
          [85,105,0],
          [105,108,1],
          [108,117,0],
          [117,120,1],
          [120,132,0],
          [132,135,1],
          [135,141,0],
          [141,144,1],
          [144,311,0],
        ],
      }),
      create({
        c: '<canvas id=`X` onmousemove="!self.Z&&(C=X.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>v[1]-x<9&&v[2]-y<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">',
        "b": [
          [0,65,0],
          [65,76,1],
          [76,81,2],
          [81,101,0],
          [101,102,2],
          [102,111,0],
          [111,112,2],
          [112,124,0],
          [124,125,2],
          [125,131,0],
          [131,132,2],
          [132,299,0],
        ],
      }),
    ],
    [
      'id → this',
      create({
        c: '<canvas id=`X` onmousemove="!self.Z&&(C=X.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>v[1]-x<9&&v[2]-y<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">',
        "b": [
          [0,8,0],
          [8,15,1],
          [15,40,0],
          [40,41,1],
          [41,225,0],
          [225,226,1],
          [226,299,0],
        ],
    }),
      create({
        c: '<canvas onmousemove="!self.Z&&(C=this.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>v[1]-x<9&&v[2]-y<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">',
        "b": [
          [0,33,0],
          [33,37,1],
          [37,221,0],
          [221,225,1],
          [225,298,0],
        ],
      }),
    ],
    [
      'Fix dragging :(',
      create({
        c: '<canvas onmousemove="!self.Z&&(C=this.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>v[1]-x<9&&v[2]-y<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">',
        "b": [
          [0,92,0],
          [92,110,1],
          [110,298,0],
        ],
      }),
      create({
        c: '<canvas onmousemove="!self.Z&&(C=this.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))"> ',
        "b": [
          [0,92,0],
          [92,102,2],
          [102,117,1],
          [117,119,2],
          [119,308,0],
        ],
      }),
    ],
    [
      'With: round 2',
      create({
        c: '<canvas onmousemove="!self.Z&&(C=this.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))"> ',
        "b": [
          [0,31,0],
          [31,53,1],
          [53,264,0],
          [264,266,1],
          [266,275,3],
          [275,281,1],
          [281,286,2],
          [286,287,1],
          [287,288,0],
          [288,290,1],
          [290,298,3],
          [298,304,1],
          [304,308,0],
        ],
      }),
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">',
        "b": [
          [0,234,0],
          [234,259,1],
          [259,263,2],
          [263,272,0],
          [272,281,3],
          [281,282,0],
          [282,290,3],
          [290,291,0],
          [291,300,2],
          [300,304,0],
        ],
      }),
    ],
    [
      'Destructure location hash',
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">',
        "b": [
          [0,117,0],
          [117,118,1],
          [118,142,0],
          [142,149,2],
          [149,154,0],
          [154,155,1],
          [155,164,0],
          [164,168,1],
          [168,188,0],
          [188,192,1],
          [192,196,0],
          [196,200,1],
          [200,304,0],
        ],
      }),
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=999,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">',
        "b": [
          [0,117,0],
          [117,123,1],
          [123,147,0],
          [147,153,1],
          [153,157,2],
          [157,162,0],
          [162,163,1],
          [163,172,0],
          [172,173,1],
          [173,193,0],
          [193,194,1],
          [194,198,0],
          [198,199,1],
          [199,303,0],
        ],
      }),
    ],
    [
      'Height -1',
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=999,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">',
        "b": [
          [0,207,0],
          [207,222,1],
          [222,303,0],
        ],
      }),
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=-1,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">',
        "b": [
          [0,207,0],
          [207,221,1],
          [221,302,0],
        ],
      }),
    ],
    [
      'Remove null check on drag',
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=-1,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">',
        "b": [
          [0,57,0],
          [57,98,3],
          [98,102,1],
          [102,116,3],
          [116,302,0],
        ],
      }),
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9),S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=-1,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">',
        "b": [
          [0,57,0],
          [57,98,3],
          [98,99,1],
          [99,113,3],
          [113,299,0],
        ],
      }),
    ],
    [
      'Pull out ctx into outer scope',
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9),S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=-1,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">',
        "b": [
          [0,228,0],
          [228,229,2],
          [229,254,1],
          [254,258,2],
          [258,286,0],
          [286,289,2],
          [289,295,1],
          [295,296,2],
          [296,299,0],
        ],
      }),
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9),S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));with(this.getContext`2d`)this.height=-1,Z.map(z=>z[0].src?drawImage(...z):fillText(...z))">',
        "b": [
          [0,204,0],
          [204,229,1],
          [229,271,0],
          [271,277,1],
          [277,286,0],
          [286,292,1],
          [292,295,0],
        ],
      }),
    ],
    [
      'Hash UX is dead, long live the Prompt!',
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9),S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));with(this.getContext`2d`)this.height=-1,Z.map(z=>z[0].src?drawImage(...z):fillText(...z))">',
        "b": [
          [0,33,0],
          [33,35,1],
          [35,114,0],
          [114,161,1],
          [161,169,3],
          [169,170,2],
          [170,202,3],
          [202,204,1],
          [204,295,0],
        ],
      }),
      create({
        c: '<canvas onclick="e=prompt();Z.push([event.x<99?((i=new Image).src=e,i):e,9,9])"onmousemove="with(event)with(getContext`2d`)height=-1,Z=self.Z?Z.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[]">',
        "b": [
          [0,8,0],
          [8,17,1],
          [17,28,2],
          [28,36,3],
          [36,46,2],
          [46,78,3],
          [78,79,1],
          [79,241,0],
        ],
      }),
    ],
    [
      'Z (object storage) declaration',
      create({
        c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9),S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));with(this.getContext`2d`)this.height=-1,Z.map(z=>z[0].src?drawImage(...z):fillText(...z))">',
        "b": [
          [0,21,0],
          [21,38,1],
          [38,295,0],
        ],
      }),
      create({
        c: '<canvas onclick="e=prompt();Z.push([event.x<99?((i=new Image).src=e,i):e,9,9])"onmousemove="with(event)with(getContext`2d`)height=-1,Z=self.Z?Z.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[]">',
        "b": [
          [0,133,0],
          [133,147,1],
          [147,148,0],
          [148,149,2],
          [149,152,0],
          [152,161,3],
          [161,202,0],
          [202,204,3],
          [204,225,0],
          [225,235,2],
          [235,236,0],
          [236,239,1],
          [239,241,0],
        ],
      }),
    ],
    [
      'Everything in mousemove (onClick → altKey) TODO: split more',
      create({
        c: '<canvas onclick="e=prompt();Z.push([event.x<99?((i=new Image).src=e,i):e,9,9])"onmousemove="with(event)with(getContext`2d`)height=-1,Z=self.Z?Z.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[]">',
        "b": [
          [0,8,0],
          [8,17,1],
          [17,78,0],
          [78,79,1],
          [79,241,0],
        ],
      }),
      create({
        c: 'canvas onmousemove="with(event)with(getContext`2d`)height=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],altKey&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))"> ',
        "b": [
          [0,61,0],
          [61,62,2],
          [62,70,0],
          [70,77,1],
          [77,130,0],
          [130,132,3],
          [132,154,0],
          [154,161,1],
          [161,162,0],
          [162,163,1],
          [163,165,0],
          [165,167,2],
          [167,239,0],
        ],
      }),
    ],
    [
      'AltKey → mouse position',
      create({
        c: 'canvas onmousemove="with(event)with(getContext`2d`)height=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],altKey&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))"> ',
        "b": [
          [0,168,0],
          [168,174,1],
          [174,239,0],
        ],
      }),
      create({
        c: '<canvas onmousemove="with(event)with(getContext`2d`)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))">',
        "b": [
          [0,168,0],
          [168,171,1],
          [171,235,0],
        ],
      }),
    ],
    [
      'Ternary for draw',
      create({
        c: '<canvas onmousemove="with(event)with(getContext`2d`)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))">',
        "b": [
          [0,32,0],
          [32,52,1],
          [52,93,0],
          [93,129,1],
          [129,235,0],
        ],
      }),
      create({
        c: '<canvas onmousemove="with(event)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(getContext`2d`[j.src?`drawImage`:`fillText`](...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))">',
        "b": [
          [0,73,0],
          [73,87,1],
          [87,117,2],
          [117,123,1],
          [123,229,0],
        ],
      }),
    ],
    [
      'Get rid of some brackets',
      create({
        c: '<canvas onmousemove="with(event)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(getContext`2d`[j.src?`drawImage`:`fillText`](...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))">',
        "b": [
          [0,72,0],
          [72,73,1],
          [73,123,0],
          [123,124,1],
          [124,167,0],
          [167,168,1],
          [168,226,0],
          [226,227,1],
          [227,229,0],
        ],
      }),
      create({c: '<canvas onmousemove="with(event)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&getContext`2d`[j.src?`drawImage`:`fillText`](...t)||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&(e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9])">'}),
    ],
  ],
};
function create({c, b}) {
  return {
    c: c || '',
    b: b || [[0, c.length, 0]], // [start<number>, end<number>, highlightType<0|1|2|3>]
  };
}
function highlight(hl) {
  /**
   * To be able to understand what means selection.start === 0,
   * we need to understand the node's parent's index, take the
   * buckets[index - 1] and add it's `end` to selection.start
   *
   * We need to store both highlights and buckets. And buckets
   * are totally recalculated after the new highlight is pushed.
   *
   * Buckets – to be able to understand how many we need to add
   * to selection start (we can get the prev bucket by index).
   *
   * Highlights – to recalc the buckets, because usual (unhighlighted)
   * text could be split by new highlight and it seems to be painful
   * to resolve.
   */
  const selection = window.getSelection();
  const domNode = selection.focusNode.parentNode;
  const sig = state.domToSig.get(domNode);
  if (!sig) {
    debugger;
    throw new Error(`Couldn't find signature by domNode`, domNode);
  }
  let start = Math.min(selection.anchorOffset, selection.focusOffset);
  let end = Math.max(selection.anchorOffset, selection.focusOffset);
  // There could be are some buckets (spans) before the selection,
  // we need to add them to track the selection of the whole text.
  const index = Array
      .from(selection.focusNode.parentNode.childNodes)
      .indexOf(selection.focusNode);
  const prevBucket = sig.b[index - 1];
  if (prevBucket && prevBucket[1] - prevBucket[0] !== sig.c.length) {
    start += prevBucket[1];
    end += prevBucket[1];
  }
  const highlights = sig.b.filter(([start, end, hl]) => hl > 0);
  highlights.push([start, end, hl]);
  highlights.sort((a,b) => a[0] - b[0]);

  sig.b = fillGapsBetweenHighlights(sig.c, highlights);

  domNode.parentNode.replaceChild(render(state.domToSig, sig), domNode);

  // print
  const b = sig.b.map(b => b.join(',')).map(b => `\t[${b}],`).join('\n')
  console.log(`"b": [\n${b}\n],`)
}
function fillGapsBetweenHighlights(content, highlights) {
  const buckets = [];
  let lastEnd = 0;
  for (let i = 0; i < highlights.length; i++) {
    const [start, end, hl] = highlights[i];
    if (lastEnd < start) {
      // Take the text between buckets
      buckets.push([lastEnd, start, 0]);
    }
    buckets.push(highlights[i]);
    lastEnd = end;
  }
  if (lastEnd < content.length) {
    // Take the text after last bucket
    buckets.push([lastEnd, content.length, 0]);
  }
  return buckets;
}
function highlightedCount(sig) {
  return sig.b
      .filter(([start, end, hl]) => hl === 1 || hl === 2)
      .reduce((sum, [start, end, hl]) => sum + end - start, 0);
}
function render(domToSig, element) {
  const {t, c, b} = element;
  const children = b.map(([start,end,hl]) => hl === 0
      ? c.slice(start, end)
      : {
        type: 'span',
        attr: {className: `highlight${hl}`},
        children: [c.slice(start, end)],
      });
  const domElement = DOM.element({
    type: 'div',
    attr: {className: 'code'},
    children,
  });
  domToSig.set(domElement, element);
  return domElement;
}
function renderHighlightedCount(sig) {
  return {
      type: 'span',
      attr: {className: 'hlCount'},
      children: [],
  };
}
function renderPage(title, a, b) {
  const row = DOM.element({type: 'div', attr: {className: 'row'}});
  let hlCountA, hlCountB, before, after;
  if (a) {
    hlCountA = highlightedCount(a);
    before = DOM.element({type: 'div', attr: {className: 'before'}, children: [
      {
        type: 'div',
        attr: {className: 'hlCount'},
        children: [
          hlCountA,
          {type: 'span', attr: {className: 'size'}, children: [ ` (${a.c.length}B)` ]},
        ],
      },
      render(state.domToSig, a),
    ]});
  }
  if (b) {
    hlCountB = highlightedCount(b);
    after = DOM.element({type: 'div', attr: {className: 'after'}, children: [
      {
        type: 'div',
        attr: {className: 'hlCount'},
        children: [
          hlCountB,
          {type: 'span', attr: {className: 'size'}, children: [ ` (${b.c.length}B)` ]},
        ],
      },
      render(state.domToSig, b),
    ]});
  }
  a &&      row.appendChild(before);
  a && b && row.appendChild(DOM.element({type: 'div', children: [ -(hlCountA - hlCountB) ]}));
  b &&      row.appendChild(after);

  const page = DOM.element({type: 'div', attr: {className: 'page'}, children: [
    {type: 'div', attr: {className: 'title'}, children: [title]},
    row,
  ]});

  if (!b) {
    document.body.insertBefore(page, journeyPage);
  } else {
    document.body.insertBefore(page, finPage);
  }
}

const journeyPage = document.getElementById('journey');
const finPage = document.getElementById('fin');
document.body.addEventListener('keydown', e => {
  if (e.key === '1' || e.key === '2' || e.key === '3') {
    highlight(+e.key);
  }
});

state.explanation.forEach(([title, a]) => renderPage(title, a));
state.pages.forEach(([title, a, b]) => renderPage(title, a, b));
