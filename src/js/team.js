export default class Team {
    constructor() {
        this.teams = [
            {
                name: 'Лучник',
                type: 'Bowman',
                health: 50,
                level: 1,
                attack: 40,
                defence: 10
            }, {
                name: 'Демон',
                type: 'Daemon',
                health: 50,
                level: 1,
                attack: 40,
                defence: 10
            }, {
                name: 'Мечник',
                type: 'Swordsman',
                health: 50,
                level: 1,
                attack: 40,
                defence: 10
            }
        ];
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        if (this.current === undefined) {
        // инициализация состояния итерации
        this.current = 0;
      }
        if (this.current < this.teams.length) {
            this.current++;
            return {
                done: false,
                value: this.teams[this.current-1]
            };
        } else {
            // очистка текущей итерации
            delete this.current;
            return {
                done: true
            };
        }
    }
}