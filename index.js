/* Your Code Here */
function createEmployeeRecord(employeeArray) {
    // console.log("employee", employeeArray)
    const person = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: [] 
    }
    return person
}

const createEmployeeRecords = (records) => {
   return records.map(record => createEmployeeRecord(record))
}


function createTimeInEvent(timeEvent) {
    let [date, hour] = timeEvent.split(" ")
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(timeEvent) {
    let [date, hour] = timeEvent.split(" ")
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    this.timeOutEvents.push(timeOut)
    return this
}


function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour)/100
    
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function calculatePayroll(employees) {
    return employees.reduce(function(total, newVal){
        return total += allWagesFor.call(newVal)
    }, 0)
}

function findEmployeeByFirstName(collection, firstName) {
    return collection.find(c => c.firstName === firstName)
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

