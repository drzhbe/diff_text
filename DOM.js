const DOM = {
  valuelessAttributes: ['autoplay', 'loop', 'muted'],
  mapAttributes: {className: 'class'},
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
        el.setAttribute(
          DOM.mapAttributes[key] || key,
          key in DOM.valuelessAttributes ? '' : attr[key]);
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
