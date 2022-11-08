import {e} from './util.js';

export default function row(oper) {
    const row = e(
      "div",
      { className: 'task' },
      e('input', {
        className: 'firstNumber taskField',
        type: 'number',
        name: 'firstNumber',
        disabled: 'disabled',
      }),
      e('input', {
        className: 'action taskField',
        type: 'text',
        name: 'action',
        value: oper,
        disabled: 'disabled',
      }),
      e('input', {
        className: 'secondNumber taskField',
        type: 'number',
        name: 'secondNumber',
        disabled: 'disabled',
      }),
      e('input', {
        className: 'equal taskField',
        type: 'text',
        name: 'equal',
        value: '=',
        disabled: 'disabled',
      }),
      e('input', {
        className: 'result taskField',
        type: 'number',
        name: 'result',
      })
    );
    return row;
}
