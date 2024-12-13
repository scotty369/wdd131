// Select DOM elements
const logWorkoutForm = document.querySelector('#logWorkoutForm');
const workoutList = document.querySelector('#workoutList');
const progressChart = document.querySelector('#progressChart');

// Initialize data
let workouts = JSON.parse(localStorage.getItem('workouts')) || [];

// Function to render workouts
function renderWorkouts() {
    if (workouts.length === 0) {
        workoutList.innerHTML = '<li>No workouts logged yet.</li>';
        return;
    }

    workoutList.innerHTML = workouts.map((workout, index) => `
        <li>
            <div>
                <strong>${workout.date}</strong> - ${workout.type}: ${workout.duration} minutes
                <p>${workout.description}</p>
            </div>
            <button onclick="deleteWorkout(${index})">Delete</button>
        </li>
    `).join('');
}

// Function to delete a workout
function deleteWorkout(index) {
    workouts.splice(index, 1);
    localStorage.setItem('workouts', JSON.stringify(workouts));
    renderWorkouts();
    renderProgressChart();
}

// Add workout to localStorage and re-render
logWorkoutForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(logWorkoutForm);
    const workout = {
        date: formData.get('date'),
        type: formData.get('type'),
        duration: parseInt(formData.get('duration')),
        description: formData.get('description')
    };
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
    logWorkoutForm.reset();
    renderWorkouts();
    renderProgressChart();
});

// Chart.js setup for progress tracking
function renderProgressChart() {
    const ctx = progressChart.getContext('2d');
    if (workouts.length === 0) {
        ctx.clearRect(0, 0, progressChart.width, progressChart.height);
        return;
    }

    const labels = workouts.map(w => w.date);
    const data = workouts.map(w => w.duration);

    if (progressChart._chart) {
        progressChart._chart.destroy();
    }

    progressChart._chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Workout Duration (mins)',
                data: data,
                backgroundColor: 'rgba(40, 167, 69, 0.7)',
                borderColor: 'rgba(40, 167, 69, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    enabled: true,
                    mode: 'nearest',
                }
            }
        }
    });
}

// Initialize page
renderWorkouts();
if (workouts.length > 0) renderProgressChart();
