const DOM = {
  element: (desc) => {
    if (typeof desc === 'string') {
      return document.createTextNode(desc);
    }
    const {type, attrs, content, children} = desc;
    const el = document.createElement(type);
    if (attrs) {
      for (key in attrs) {
        el[key] = attrs[key];
      }
    }
    if (children) {
      children
        .map(DOM.element)
        .forEach(el.appendChild.bind(el));
    }
    return el;
  },
};
