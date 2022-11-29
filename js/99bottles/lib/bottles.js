export class Bottles {
    verse(count) {
        if(count === 0) {
            return 'No more bottles of beer on the wall, ' +
            'no more bottles of beer.\n' +
            'Go to the store and buy some more, ' +
            '99 bottles of beer on the wall.\n';
        }

        if(count === 1) {
            return '1 bottle of beer on the wall, ' +
            '1 bottle of beer.\n' +
            'Take it down and pass it around, ' +
            'no more bottles of beer on the wall.\n';
        }

        if(count === 2) {
            return '2 bottles of beer on the wall, ' +
            '2 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '1 bottle of beer on the wall.\n';
        }

        if(count === 3) {
            return '3 bottles of beer on the wall, ' +
            '3 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '2 bottles of beer on the wall.\n';
        }

        return `${count} bottles of beer on the wall, ` +
        `${count} bottles of beer.\n` +
        'Take one down and pass it around, ' +
        `${count - 1} bottles of beer on the wall.\n`;
    }

    verses(a, b) {
        return `${this.verse(a)}\n${this.verse(b)}`
    }
}