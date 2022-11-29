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

        return '99 bottles of beer on the wall, ' +
        '99 bottles of beer.\n' +
        'Take one down and pass it around, ' +
        '98 bottles of beer on the wall.\n';
    }
}