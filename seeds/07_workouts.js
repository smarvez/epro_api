
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(() => {
      // Inserts seed entries
      return knex('workouts').insert([
        { id: 1, client_id: 1, trainer_id: 1, date: '03/13/18', name: 'Power Hour', created_by_trainer: true },
        { id: 2, client_id: 2, date: '03/05/18', name: 'Fitness for Feminists', created_by_trainer: false },
        { id: 3, client_id: 3, trainer_id: 1, date: '03/05/18', name: 'Triples', created_by_trainer: true },
        { id: 4, client_id: 3, trainer_id: 1, date: '03/06/18', name: 'Quadruples', created_by_trainer: true },
        { id: 5, client_id: 1, trainer_id: 1, date: '03/14/18', name: 'Power Hour', created_by_trainer: true },
        { id: 6, client_id: 1, trainer_id: 1, date: '03/15/18', name: 'Fun Workout', created_by_trainer: true },
        { id: 7, client_id: 1, trainer_id: 1, date: '03/16/18', name: 'Cardio', created_by_trainer: true },
        { id: 8, client_id: 1, trainer_id: 1, date: '03/17/18', name: 'Crushing Stuff', created_by_trainer: true },
        { id: 9, client_id: 1, trainer_id: 1, date: '03/18/18', name: 'Flexability', created_by_trainer: true },
        { id: 10, client_id: 1, trainer_id: 1, date: '03/19/18', name: 'Strength', created_by_trainer: true },
        { id: 11, client_id: 1, trainer_id: 1, date: '03/20/18', name: 'Rest Week', created_by_trainer: true },
        { id: 12, client_id: 1, trainer_id: 1, date: '03/21/18', name: 'Training for Project', created_by_trainer: true },
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('workouts_id_seq', (SELECT MAX(id) FROM workouts));`
      );
    })
}
