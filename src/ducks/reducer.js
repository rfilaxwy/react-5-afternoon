const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}
//wizard 1
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
//Wizard 2
const UPDATE_CITY ='UPDATE_CITY';
// Wizard 3
const UPDATE_PROP = 'UPDATE_PROP';
// Wizard 4
const UPDATE_FOUND ='UPDATE_FOUND';
// Wizard 5
const UPDATE_REALESTATEAGENT = 'UPDATE_REALESTATEAGENT';
// Wizard 6
const UPDATE_COST ='UPDATE_COST';
const UPDATE_DOWNPAYMENT ='UPDATE_DOWNPAYMENT';
// Wizard 7
const UPDATE_CREDIT = 'UPDATE_CREDIT';
// Wizard 8
const UPDATE_HISTORY = 'UPDATE_HISTORY';
// Wizard 9
const UPDATE_ADDRESSONE = 'UPDATE_ADRESSONE';
const UPDATE_ADDRESSTWO = 'UPDATE_ADRESSTWO';
const UPDATE_ADDRESSTHREE = 'UPDATE_ADRESSTHREE';
// Wizard 10
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

function reducer(state=initialState, action ){
  switch( action.type ){
      case UPDATE_LOAN_TYPE:
          return Object.assign({}, state, {loanType:action.payload});
      case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType:action.payload});
      case UPDATE_CITY:
            return Object.assign({}, state, {city:action.payload})
      case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn:action.payload});
      case UPDATE_FOUND:
            return Object.assign({}, state, {found:action.payload});
      case UPDATE_REALESTATEAGENT:
            return Object.assign({},state, {realEstateAgent:action.payload})
      case UPDATE_COST:
            return Object.assign({},state,{cost:action.payload})
      case UPDATE_DOWNPAYMENT:
            return Object.assign({},state,{downPayment:action.payload})
      case UPDATE_CREDIT:
            return Object.assign({},state,{credit:action.payload})
      case UPDATE_HISTORY:
            return Object.assign({},state,{history:action.payload})
      case UPDATE_ADDRESSONE:
            return Object.assign({},state,{addressOne:action.payload})
      case UPDATE_ADDRESSTWO:
            return Object.assign({},state,{addressTwo:action.payload})
      case UPDATE_ADDRESSTHREE:
            return Object.assign({},state,{addressThree:action.payload})
      case UPDATE_FIRSTNAME:
            return Object.assign({},state,{firstName:action.payload})
      case UPDATE_LASTNAME:
            return Object.assign({},state,{lastName:action.payload})
      case UPDATE_EMAIL:
            return Object.assign({},state,{email:action.payload})
      default: return state;
  }
}
   //Wizard 1 
export function updateLoanType( loanType ){
    
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType( property ){
    return{
        type:UPDATE_PROPERTY_TYPE,
        payload: property
    }
}
    //Wizard 2
export function updateCity(city){
    return {
        type:UPDATE_CITY,
        payload:city
    }
}
    //Wizard 3
export function updateProp( prop ){
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}
//Wizard 4
export function updateFound (found){
    return{
        type: UPDATE_FOUND,
        payload: found
    }
}
export function updateRealEstateAgent (realEstateAgent){
    return{
        type:UPDATE_REALESTATEAGENT,
        payload:realEstateAgent
    }
}
export function updateCost (cost){
    return{
        type:UPDATE_COST,
        payload:cost
    }
}
export function updateDownPayment (downPayment){
    return{
        type: UPDATE_DOWNPAYMENT,
        payload:downPayment
    }
}
export function updateCredit (credit){
    return{
        type:UPDATE_CREDIT,
        payload:credit
    }
}
export function updateHistory (history){
    return{
        type:UPDATE_HISTORY,
        payload:history
    }
}
export function updateAddressOne (addressOne){
    return{
        type:updateAddressOne,
        payload:addressOne
    }
}
export function updateAddressTwo (addressTwo){
    return{
        type:UPDATE_ADDRESSTWO,
        payload:addressTwo
    }
}
export function updateAddressThree (addressThree){
    return{
        type:UPDATE_ADDRESSTHREE,
        payload:addressThree
    }
}
export function updateFirst (firstName){
    return{
        type:UPDATE_FIRSTNAME,
        payload:firstName
    }
}
export function updateLast (lastName){
    return{
        type:updateLast,
        payload:lastName
    }
}
export function updateEmail (email){
    return{
        type:UPDATE_EMAIL,
        payload:email
    }
}
export default reducer;