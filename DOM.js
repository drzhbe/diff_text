const DOM = {
  element: (desc) => {
    if (desc instanceof HTMLElement) {
      return desc;
    }
    if (typeof desc === 'string' || typeof desc === 'number') {
      return document.createTextNode(desc);
    }
    const {type, attr, content, children} = desc;
    const el = document.createElement(type);
    if (attr) {
      for (key in attr) {
        el[key] = attr[key];
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
