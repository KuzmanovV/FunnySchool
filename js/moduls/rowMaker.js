import {el} from './utils.js';

function row(oper) {
    const row = el(
      'div',
      { className: 'task' },
      el('input', {
        className: 'firstNumber taskField',
        type: 'number',
        name: 'firstNumber',
        disabled: 'disabled',
      }),
      el('input', {
        className: 'action taskField',
        type: 'text',
        name: 'action',
        value: oper,
        disabled: 'disabled',
      }),
      el('input', {
        className: 'secondNumber taskField',
        type: 'number',
        name: 'secondNumber',
        disabled: 'disabled',
      }),
      el('input', {
        className: 'equal taskField',
        type: 'text',
        name: 'equal',
        value: '=',
        disabled: 'disabled',
      }),
      el('input', {
        className: 'result taskField',
        type: 'number',
        name: 'result',
      })
    );
    return row;
}

function rowMixed1(oper) {
  const row = el(
    "div",
    { className: 'task' },
    el('input', {
      className: 'firstNumber taskField',
      type: 'number',
      name: 'firstNumber',
    }),
    el('input', {
      className: 'action taskField',
      type: 'text',
      name: 'action',
      value: oper,
      disabled: 'disabled',
    }),
    el('input', {
      className: 'secondNumber taskField',
      type: 'number',
      name: 'secondNumber',
      disabled: 'disabled',
    }),
    el('input', {
      className: 'equal taskField',
      type: 'text',
      name: 'equal',
      value: '=',
      disabled: 'disabled',
    }),
    el('input', {
      className: 'result taskField',
      type: 'number',
      name: 'result',
      disabled: 'disabled',
    })
  );
  return row;
}

function rowMixed2(oper) {
  const row = el(
    "div",
    { className: 'task' },
    el('input', {
      className: 'firstNumber taskField',
      type: 'number',
      name: 'firstNumber',
      disabled: 'disabled',
    }),
    el('input', {
      className: 'action taskField',
      type: 'text',
      name: 'action',
      value: oper,
      disabled: 'disabled',
    }),
    el('input', {
      className: 'secondNumber taskField',
      type: 'number',
      name: 'secondNumber',
    }),
    el('input', {
      className: 'equal taskField',
      type: 'text',
      name: 'equal',
      value: '=',
      disabled: 'disabled',
    }),
    el('input', {
      className: 'result taskField',
      type: 'number',
      name: 'result',
      disabled: 'disabled',
    })
  );
  return row;
}

function rowTriple(oper) {
  const row = el(
    "div",
    { className: 'task' },
    el('input', {
      className: 'zeroNumber taskField',
      type: 'number',
      name: 'zeroNumber',
      disabled: 'disabled',
    }),
    el('input', {
      className: 'action taskField',
      type: 'text',
      name: 'action',
      value: '+',
      disabled: 'disabled',
    }),
    el('input', {
      className: 'firstNumber taskField',
      type: 'number',
      name: 'firstNumber',
      disabled: 'disabled',
    }),
    el('input', {
      className: 'action taskField',
      type: 'text',
      name: 'action',
      value: oper,
      disabled: 'disabled',
    }),
    el('input', {
      className: 'secondNumber taskField',
      type: 'number',
      name: 'secondNumber',
      disabled: 'disabled',
    }),
    el('input', {
      className: 'equal taskField',
      type: 'text',
      name: 'equal',
      value: '=',
      disabled: 'disabled',
    }),
    el('input', {
      className: 'result taskField',
      type: 'number',
      name: 'result',
    })
  );
  return row;
}

export{
  row,
  rowMixed1,
  rowMixed2,
  rowTriple
}
