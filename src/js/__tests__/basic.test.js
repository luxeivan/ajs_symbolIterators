import Team from '../team';

test('Team', () => {
  const team = new Team();
  console.log(team);
  const result = [];
  for (const item of team) {
    console.log(item);
    result.push(item);
  }
  const tobe = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }, {
      name: 'Демон',
      type: 'Daemon',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }, {
      name: 'Мечник',
      type: 'Swordsman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];
  expect(result).toEqual(tobe);
});
