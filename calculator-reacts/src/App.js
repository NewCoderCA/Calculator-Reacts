import logo from './logo.jpeg';
import image from './flagAfrica.png';
import styles from './styles.css';
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';


export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}


function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if(state.overwrite) { 
        return {
          ...state,
          currentSum: payload.digit,
          overwrite: false,
        }
      }
      if(payload.digit === '0' && state.currentSum === '0') return state;
      if(payload.digit === '.' && state.currentSum.includes('.')){
        return state;
      }
      return {
        ...state, currentSum: `${state.currentSum || ''}${payload.digit}`
      }
    case ACTIONS.CHOOSE_OPERATION: 
      if(state.currentSum == null && state.previousSum == null) {
        return state;
      }
      if(state.currentSum == null){
        return {
          ...state, operation: payload.operation
        }
      }
      if(state.previousSum == null) {
          return {
            ...state, operation: payload.operation, previousSum: state.currentSum, currentSum: null
          }
      }
      return {
        ...state, previousSum: evaluate(state), operation: payload.operation, currentSum: null
      }
    case ACTIONS.CLEAR: 
      return {};
    case ACTIONS.DELETE_DIGIT:
      if(state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentSum: null
        }
      }
      if(state.currentSum == null) return state;
      if(state.currentSum.length == 1) 
        return { 
        ...state, 
        currentSum: null 
      }
      return {
        ...state,
        currentSum: state.currentSum.slice(0, -1)
      }
      return {};
    case ACTIONS.EVALUATE:
      if (state.operation == null || state.currentSum == null || state.previousSum == null) {
        return state;
      }
      return {
        ...state,
        operation: null,
        previousSum: null,
        overwrite: true,
        currentSum:evaluate(state)
      }
  };
}


function evaluate({ currentSum, previousSum, operation }) {
  const previous = parseFloat(previousSum);
  const current = parseFloat(currentSum);
  if (isNaN(previous) || isNaN(current)) return '';

  let computation = '';
  switch(operation) {
    case '+': computation = previous + current;
    break;
    case '-': computation = previous - current;
    break;
    case '*': computation = previous * current;
    break;
    case '÷': computation = previous / current;
    break;
  }
return computation.toString();
}

const INTEGER_FORMAT = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
})
function formatNumbers(number){
  if(number == null) 
  return
  const [integer, decimal] = number.split('.')
  if (decimal == null)
  return INTEGER_FORMAT.format(integer)
  return `${INTEGER_FORMAT.format(integer)}.${decimal}`

}


function App() {
  const [{ currentSum, previousSum, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className='App'>
      <header className='App-header'>
       <nav className='App-nav'><img src={image} className='flagAfrica' alt='African continent containing African flags' />
        <img src={logo} className='App-logo' alt='Calculator logo' /></nav>
        <h1>Quick Maths!</h1>
      </header>

    <div className='calculator-grid'>
      <div className='output'>
      <div className='previous-sum'>{formatNumbers(previousSum)} {operation}</div>
      <div className='current-sum'>{formatNumbers(currentSum)}</div>
    </div>
   
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>Clear</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>Delete </button>
      <OperationButton operation='÷' dispatch={dispatch} />
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operation='*' dispatch={dispatch} />
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operation='+' dispatch={dispatch} />
      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operation='-' dispatch={dispatch} />
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button className='span-two' onClick={() => dispatch ({ type: ACTIONS.EVALUATE })}>=</button>
    </div>

</div>  
  );
}

export default App;
