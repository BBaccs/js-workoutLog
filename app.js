function Workout(date, bodyWeight, sleep, exerciseName, weight, sets, reps, rest){
    this.date = date;
    this.bodyWeight= bodyWeight;
    this.sleep = sleep;
    this.exerciseName = exerciseName;
    this.weight = weight;
    this.sets = sets;
    this.reps = reps;
    this.rest = rest;  
}

function UI () {}

let counter = -1;
//Create New Log
UI.prototype.newLog = function(workout){
    
    counter++;
    const workoutLogs = document.getElementById('workoutLogs');

    const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr id="heading">
                    <th>Date: ${workout.date}</th>
                    <th>Body Weight: ${workout.bodyWeight}lbs</th>
                    <th>Body Weight: ${workout.sleep}hours</th>
                    <th>X</th>
                </tr>
                <tr>
                    <th>Exercise</th>
                    <th>Weight (lbs)</th>
                    <th>Sets X Reps</th>
                    <th>Rest</th>
                </tr>
                <tbody>
                    <tr>
                        <th>${workout.exerciseName} </th>
                        <th>${workout.weight} </th>
                        <th>${workout.sets} x ${workout.reps}</th>
                        <th>${workout.rest}</th>
                        <th>X</th>
                    </tr>
                </tbody>
            </thead>
        `;
        workoutLogs.appendChild(table);
        return counter;
}

UI.prototype.addToLog = function(workout, counter){
    let output = '';
    output = `
    <tr>
        <th>${workout.exerciseName} </th>
        <th>${workout.weight} </th>
        <th>${workout.sets} x ${workout.reps}</th>
        <th>${workout.weight}</th>
        <th>X</th>
    </tr>
    `;
    let tableBody = document.createElement('table');
    tableBody = output;

    document.getElementsByTagName('table')[counter].insertAdjacentHTML('afterbegin', tableBody);
    
}


UI.prototype.clearFields = function(){
    date = document.getElementById('date').value = '';
    bodyWeight = document.getElementById('bodyWeight').value = '';
    exerciseName = document.getElementById('exerciseName').value= '';
    weight = document.getElementById('weight').value= '';
    sets = document.getElementById('sets').value = '';
    reps = document.getElementById('reps').value = '';
    rest = document.getElementById('rest').value = '';
    sleep = document.getElementById('sleep').value = '';
}

//Event listeners
document.getElementById('workout-form').addEventListener('submit', function(e){

    const workout = new Workout,
        ui = new UI;

        workout.date = document.getElementById('date').value,
        workout.bodyWeight = document.getElementById('bodyWeight').value,
        workout.sleep = document.getElementById('sleep').value,
        workout.exerciseName = document.getElementById('exerciseName').value,
        workout.weight = document.getElementById('weight').value,
        workout.sets = document.getElementById('sets').value,
        workout.reps = document.getElementById('reps').value,
        workout.rest = document.getElementById('rest').value;

   
        if (workout.date === '' || workout.bodyWeight === '' || workout.sleep === '') {
            alert('Date, Weight & sleep must be filled out to create a new log, to add to an exisiting log, click the second button')
        } else {
            ui.newLog(workout);
            ui.clearFields();
        }
        e.preventDefault();
});

document.getElementById('addButton').addEventListener('click', function (e) {
    const ui = new UI;
    const workout = new Workout;
    workout.exerciseName = document.getElementById('exerciseName').value,
        workout.weight = document.getElementById('weight').value,
        workout.sets = document.getElementById('sets').value,
        workout.reps = document.getElementById('reps').value,
        workout.rest = document.getElementById('rest').value,
        workout.sleep = document.getElementById('sleep').value;
        workout.date = document.getElementById('date').value;
        workout.bodyWeight = document.getElementById('bodyWeight').value;
        console.log(workout.sleep);
        if (workout.date === '' & workout.bodyWeight === '' & workout.sleep === '') {  
            ui.addToLog(workout, counter);
            ui.clearFields();
            
        } else {
            alert("You've entered a date/time/sleep value, if you want to create a new log, please hit the submit button instead.");
        }
        e.preventDefault();
});