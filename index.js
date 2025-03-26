let employee = {
  name: 'Victor',
  streetAddress: 'River Bank'
}
console.log(employee);

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return { ...obj, [key]: value }
}
  let newEmployee = updateEmployeeWithKeyAndValue(employee, 'town', 'Nairobi')
  console.log(newEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Kimathi' )
console.log(employee);

function deleteFromEmployeeByKey(obj, key) {
  let deletedEmployee = { ...obj, }
  delete deletedEmployee[key]
  return deletedEmployee
}
let newEmployee2 = deleteFromEmployeeByKey(employee, 'name')
console.log(newEmployee2);
console.log(employee);
  
function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key]
  return obj
}
destructivelyDeleteFromEmployeeByKey(employee, 'name')
  console.log(employee);