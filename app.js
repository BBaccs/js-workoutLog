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


//Create New Log
UI.prototype.newLog = function(workout){
    const workoutLogs = document.getElementById('workoutLogs');

    const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr id="heading">
                    <th>Date: ${workout.date}</th>
                    <th>Body Weight: ${workout.bodyWeight} lb</th>
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
                        <th>${workout.weight}</th>
                        <th>X</th>
                    </tr>
                </tbody>
            </thead>
        `;
        workoutLogs.appendChild(table);
}

UI.prototype.addToLog = function(workout){
 
    var tableBody = document.createElement('table');
    tableBody.innerHTML = `
    <tr>
        <th>${workout.exerciseName} </th>
        <th>${workout.weight} </th>
        <th>${workout.sets} x ${workout.reps}</th>
        <th>${workout.weight}</th>
        <th>X</th>
    </tr>
    `;
    document.getElementsByTagName('table')[0].insertAdjacentHTML('afterbegin', tableBody);
   
 
    
}

document.getElementById('addButton').addEventListener('click', function (e) {
    const ui = new UI;
    const workout = new Workout;
    workout.exerciseName = document.getElementById('exerciseName').value,
        workout.weight = document.getElementById('weight').value,
        workout.sets = document.getElementById('sets').value,
        workout.reps = document.getElementById('reps').value,
        workout.rest = document.getElementById('rest').value;

    ui.addToLog(workout);
    e.preventDefault();
    ui.clearFields();
    
});




UI.prototype.clearFields = function(){
    date = document.getElementById('date').value = '';
    bodyWeight = document.getElementById('bodyWeight').value = '';
    exerciseName = document.getElementById('exerciseName').value= '';
    weight = document.getElementById('weight').value= '';
    sets = document.getElementById('sets').value = '';
    reps = document.getElementById('reps').value = '';
    rest = document.getElementById('rest').value = '';
    sleep = document.getElementById('sleep').value = '';
    newEntry = document.getElementById('newEntry').checked = false;
}

//Event listeners
document.getElementById('workout-form').addEventListener('submit', function(e){
    const workout = new Workout,
        ui = new UI;

        workout.date = document.getElementById('date').value,
        workout.bodyWeight = document.getElementById('bodyWeight').value,
        workout.exerciseName = document.getElementById('exerciseName').value,
        workout.weight = document.getElementById('weight').value,
        workout.sets = document.getElementById('sets').value,
        workout.reps = document.getElementById('reps').value,
        workout.rest = document.getElementById('rest').value;

    console.log(date, bodyWeight, exerciseName, weight, sets, reps, rest);

    ui.newLog(workout);
    ui.clearFields();
    e.preventDefault();

});