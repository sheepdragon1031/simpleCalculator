import { addValueToCalculation, calculation} from '../stores';

export const UPDATE_CALCULATION_AND_RESULT = 'UPDATE_CALCULATION_AND_RESULT';
export const CLEAR_ALL = 'CLEAR_ALL';

export const updateCalculation = (inputValue, currentState, currentResult) => {
    // Update the calculation and the result
    // Get the current calc array 
    // Convert calc array to string
    // Split string based on operators (/ * - +)
    // Loop over array and make calculation
    let updateCalculationArray = addValueToCalculation(inputValue, currentState);
    let calculationResult = calculation(updateCalculationArray, currentResult);
  
    return {
      type: UPDATE_CALCULATION_AND_RESULT,
      payload: {
        calculation: updateCalculationArray, 
        result: calculationResult
      }
    }
  };
  
  // TODO Make the calculation
  export const clearCalculation = () => {
    return {
      type: CLEAR_ALL,
      payload: {
        calculation: [], 
        result: 0
      }
    }
  };