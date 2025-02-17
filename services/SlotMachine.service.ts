enum Slots {
    LEMON = 'lemon',
    APPLE = 'apple',
    WATERMELON = 'watermelon',
    CHERRIES = 'cherries',
    SUITS = 'suits',
    CROWN = 'crown',
    BAR = 'bar',
    FIRE = 'fire',
    BONUS = 'bonus',
    WILD = 'wild',
    SEVEN = '777',
    DOLAR = 'dolar',
}

class SlotMachineService {
    private userPoints = 0;
    private rolls = 0;
    private slots = [
        {
            slot: Slots.LEMON,
            figure: '🍋',
            points: 10
        },
        {
            slot: Slots.APPLE,
            figure: '🍎',
            points: 15,
        },
        {
            slot: Slots.WATERMELON,
            figure: '🍉',
            points: 20
        },
        {
            slot: Slots.CHERRIES,
            figure: '🍒',
            points: 25,
        },
        {
            slot: Slots.SUITS,
            figure: '🃏',
            points: 30,
        },
        {
            slot: Slots.CROWN,
            figure: '👑',
            points: 50,
        },
        {
            slot: Slots.BAR,
            figure: '🔴',
            points: 75
        },
        {
            slot: Slots.FIRE,
            figure: '🔥',
            points: 150,
        },
        {
            slot: Slots.BONUS,
            figure: '💰',
            points: 250
        },
        {
            slot: Slots.WILD,
            figure: '🟩',
            points: 0,
        },
        {
            slot: Slots.SEVEN,
            figure: '777',
            poits: 1000,
        },
        {
            slot: Slots.DOLAR,
            figure: '💵',
            points: 0,
        }
    ]

    constructor() {
        this.setUserPoints(0);
        this.setRolls(10);
    }

    setUserPoints(points: number) {
        this.userPoints += points
    }

    getUserPoints() {
        return this.userPoints;
    }

    setRolls(rolls: number) {
        this.rolls += rolls;
    }

    getRolls() {
        return this.rolls
    }

    private getSlot() {
        const index = Math.floor(Math.random() * (this.slots.length - 1))
        console.log('THE SLOT INDEX =>', { index });
        const slot = this.slots.at(index);
        console.log('THE SLOT SELECTED =>', { slot });
        return slot;
    }

    public generateSpinReel() {
        const slot = this.getSlot();
        return slot;
    }

    public validateRoll(rolls: [any[]]) {
        let currentPoints = 0
        rolls.forEach(i => {
            console.log('VALIDATION ===>>', { i })
            if (i[0]?.slot === i[1]?.slot && i[1]?.slot === i[3]?.slot) {
                currentPoints += i[0].points
                console.log('SUM POINTS =##')
            } else {
                console.log('NOT POINT GAINED =##')
            }
        })
        this.setUserPoints(currentPoints);
    }
}

export { SlotMachineService }