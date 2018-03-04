
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(() => {
      // Inserts seed entries
      return knex('exercises').insert([
        {
      "id": 1,
      "name": "Ab Roller",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 2,
      "name": "Arnold Dumbbell Press",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 3,
      "name": "Around the World",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 4,
      "name": "Back Extensions",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 5,
      "name": "Bench Press",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 6,
      "name": "Bent Over Row",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 7,
      "name": "Bicep Curl",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 8,
      "name": "Bicycle Crunch",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 9,
      "name": "Box Squat",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 10,
      "name": "Bulgarian Split Squat",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 11,
      "name": "Cable Crossover",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 12,
      "name": "Cable Crunch",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 13,
      "name": "Cable Row",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 14,
      "name": "Campus Board Ladder Maximum",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 15,
      "name": "Campus Board Ladder",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 16,
      "name": "Campus Board Crosses",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 17,
      "name": "Campus Board Touches",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 18,
      "name": "Campus Board Offset Bumps",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 19,
      "name": "Campus Board Doubles",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 20,
      "name": "Campus Board Maximum",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 21,
      "name": "Campus Board Switches",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 22,
      "name": "Chest Dip",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 23,
      "name": "Chest Dip (Assisted)",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 24,
      "name": "Chin Up",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 25,
      "name": "Chin Up (Assisted)",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 26,
      "name": "Clean",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 27,
      "name": "Clean and Jerk",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 28,
      "name": "Concentration Curl",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 29,
      "name": "Crunch",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 30,
      "name": "Cycling",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 31,
      "name": "Deadlift",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 32,
      "name": "Decline Bench Press",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 33,
      "name": "Decline Crunch",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 34,
      "name": "Exercise Ball Crunch",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 35,
      "name": "Exercise Ball Push Ups",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 36,
      "name": "Face Pull",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 37,
      "name": "Flat Straight Leg Raise",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 38,
      "name": "Front Cable Raise",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 39,
      "name": "Front Lever",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 40,
      "name": "Front Raise",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 41,
      "name": "Front Squat",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 42,
      "name": "Good Morning",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 43,
      "name": "Hack Squat",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 44,
      "name": "Hammer Curl",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 45,
      "name": "Hang Clean",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 46,
      "name": "Hang Snatch",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 47,
      "name": "Hanging Leg Raise",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 48,
      "name": "High Knees",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 49,
      "name": "High Pulls",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 50,
      "name": "Hiking",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 51,
      "name": "Hip Thrust",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 52,
      "name": "Jackknife",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 53,
      "name": "Jump Rope",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 54,
      "name": "Jump Shrug",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 55,
      "name": "Jump Squat",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 56,
      "name": "Jumping Jacks",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 57,
      "name": "Kipping Pull Up",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 58,
      "name": "Knee Raise",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 59,
      "name": "Kneeling Push Up",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 60,
      "name": "Lat Pulldown",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 61,
      "name": "Lat Pulldown (Single Arm)",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 62,
      "name": "Lateral Raise",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 63,
      "name": "Leg Extension",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 64,
      "name": "Leg Press",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 65,
      "name": "Lunge (Barbell)",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 66,
      "name": "Lunge (Bodyweight)",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 67,
      "name": "Lunge (Dumbbell)",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 68,
      "name": "Military Press",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 69,
      "name": "Mountain Climbers",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 70,
      "name": "Oblique Crunch",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 71,
      "name": "One Arm Hang",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 72,
      "name": "One Arm Pull Up",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 73,
      "name": "Overhead Squat",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 74,
      "name": "Pectoral Fly",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 75,
      "name": "Pendlay Row",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 76,
      "name": "Plank",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 77,
      "name": "Power Clean",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 78,
      "name": "Power Snatch",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 79,
      "name": "Preacher Curl",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 80,
      "name": "Press Under",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 81,
      "name": "Pull Up",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 82,
      "name": "Pull Up (Assisted)",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 83,
      "name": "Push Press",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 84,
      "name": "Push Up",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 85,
      "name": "Reverse Crunch",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 86,
      "name": "Reverse Curl",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 87,
      "name": "Romanian Deadlift",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 88,
      "name": "Rowing",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 89,
      "name": "Running",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 90,
      "name": "Russian Twist",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 91,
      "name": "Seated Row",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 92,
      "name": "Shoulder Press",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 93,
      "name": "Shrug",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 94,
      "name": "Side Plank",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 95,
      "name": "Sit Up",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 96,
      "name": "Skating",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 97,
      "name": "Skiing",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 98,
      "name": "Skullcrushers",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 99,
      "name": "Snowboarding",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 100,
      "name": "Split Jerk",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 101,
      "name": "Squat",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 102,
      "name": "Standing Calf Raise",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 103,
      "name": "Stiff Legged Deadlift",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 104,
      "name": "Stretching",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 105,
      "name": "Sumo Deadlift",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 106,
      "name": "Superman",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 107,
      "name": "Swimming",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 108,
      "name": "T Bar Row",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 109,
      "name": "Tricep Dip",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 110,
      "name": "Tricep Extension",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 111,
      "name": "Two Arm Hang",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 112,
      "name": "Upright Barbell Row",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 113,
      "name": "V-Up",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 114,
      "name": "Walking",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 115,
      "name": "Wide Grip Pull Up",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 116,
      "name": "Woodchoppers",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    },
    {
      "id": 117,
      "name": "Yoga",
      "description": "",
      "sets": 0,
      "sets_actual": 0,
      "reps": 0,
      "reps_actual": 0,
      "weight": 0,
      "weight_actual": 0,
      "time": 0,
      "time_actual": 0
    }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('exercises_id_seq', (SELECT MAX(id) FROM exercises));`
      );
    })
}
