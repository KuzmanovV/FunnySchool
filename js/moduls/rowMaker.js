import {el} from './utils.js';

export default function row(oper) {
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
