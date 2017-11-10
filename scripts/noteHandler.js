
class Note {
    constructor( name, alias, frequency ) {
      this.name = name;
      this.alias = alias;
      this.frequency = frequency;
    }
}

// init notes
let notes = [];
notes.push( new Note( 'C', '', 16.35 ) );
notes.push( new Note( 'C#', 'Db', 17.32 ) );
notes.push( new Note( 'D', '', 18.35 ) );
notes.push( new Note( 'D#', 'Eb', 19.45 ) );
notes.push( new Note( 'E', '', 20.60 ) );
notes.push( new Note( 'F', '', 21.83 ) );
notes.push( new Note( 'F#', 'Gb', 23.12 ) );
notes.push( new Note( 'G', '', 24.50 ) );
notes.push( new Note( 'G#', 'Ab', 25.96 ) );
notes.push( new Note( 'A', '', 27.50 ) );
notes.push( new Note( 'A#', 'Bb', 29.14 ) );
notes.push( new Note( 'B', '', 30.87 ) );
notes.push( new Note( 'C', '', 32.70 ) );
notes.push( new Note( 'C#', 'Db', 34.65 ) );
notes.push( new Note( 'D', '', 36.71 ) );
notes.push( new Note( 'D#', 'Eb', 38.89 ) );
notes.push( new Note( 'E', '', 41.20 ) );
notes.push( new Note( 'F', '', 43.65 ) );
notes.push( new Note( 'F#', 'Gb', 46.25 ) );
notes.push( new Note( 'G', '', 49.00 ) );
notes.push( new Note( 'G#', 'Ab', 51.91 ) );
notes.push( new Note( 'A', '', 55.00 ) );
notes.push( new Note( 'A#', 'Bb', 58.27 ) );
notes.push( new Note( 'B', '', 61.74 ) );
notes.push( new Note( 'C', '', 65.41 ) );
notes.push( new Note( 'C#', 'Db', 69.30 ) );
notes.push( new Note( 'D', '', 73.42 ) );
notes.push( new Note( 'D#', 'Eb', 77.78 ) );
notes.push( new Note( 'E', '', 82.41 ) );
notes.push( new Note( 'F', '', 87.31 ) );
notes.push( new Note( 'F#', 'Gb', 92.50 ) );
notes.push( new Note( 'G', '', 98.00 ) );
notes.push( new Note( 'G#', 'Ab', 103.83 ) );
notes.push( new Note( 'A', '', 110.00 ) );
notes.push( new Note( 'A#', 'Bb', 116.54 ) );
notes.push( new Note( 'B', '', 123.47 ) );
notes.push( new Note( 'C3', '', 130.81 ) );
notes.push( new Note( 'C#', 'Db', 138.59 ) );
notes.push( new Note( 'D', '',	146.83 ) );
notes.push( new Note( 'D#', 'Eb', 155.56 ) );
notes.push( new Note( 'E', '', 164.81 ) );
notes.push( new Note( 'F', '', 174.61 ) );
notes.push( new Note( 'F#', 'Gb', 185.00 ) );
notes.push( new Note( 'G', '', 196.00 ) );
notes.push( new Note( 'G#', 'Ab', 207.65 ) );
notes.push( new Note( 'A', '', 220.00 ) );
notes.push( new Note( 'A#', 'Bb', 233.08 ) );
notes.push( new Note( 'B', '', 246.94 ) );
notes.push( new Note( 'C', '', 261.63 ) );
notes.push( new Note( 'C#', 'Db', 277.18 ) );
notes.push( new Note( 'D', '', 293.66 ) );
notes.push( new Note( 'D#', 'Eb', 311.13 ) );
notes.push( new Note( 'E', '', 329.63 ) );
notes.push( new Note( 'F', '', 349.23 ) );
notes.push( new Note( 'F#', 'Gb', 369.99 ) );
notes.push( new Note( 'G', '', 392.00 ) );
notes.push( new Note( 'G#', 'Ab', 415.30 ) );
notes.push( new Note( 'A', '', 440.00 ) );
notes.push( new Note( 'A#', 'Bb', 466.16 ) );
notes.push( new Note( 'B', '', 493.88 ) );
notes.push( new Note( 'C', '', 523.25 ) );
notes.push( new Note( 'C#', 'Db', 554.37 ) );
notes.push( new Note( 'D', '', 587.33 ) );
notes.push( new Note( 'D#', 'Eb', 622.25 ) );
notes.push( new Note( 'E', '', 659.25 ) );
notes.push( new Note( 'F', '', 698.46 ) );
notes.push( new Note( 'F#', 'Gb', 739.99 ) );
notes.push( new Note( 'G', '', 783.99 ) );
notes.push( new Note( 'G#', 'Ab', 830.61 ) );
notes.push( new Note( 'A', '', 880.00 ) );
notes.push( new Note( 'A#', 'Bb', 932.33 ) );
notes.push( new Note( 'B', '', 987.77 ) );
notes.push( new Note( 'C', '', 1046.50 ) );
notes.push( new Note( 'C#', 'Db', 1108.73 ) );
notes.push( new Note( 'D', '', 1174.66 ) );
notes.push( new Note( 'D#', 'Eb', 1244.51 ) );
notes.push( new Note( 'E', '', 1318.51 ) );
notes.push( new Note( 'F', '', 1396.91 ) );
notes.push( new Note( 'F#', 'Gb', 1479.98 ) );
notes.push( new Note( 'G', '', 1567.98 ) );
notes.push( new Note( 'G#', 'Ab', 1661.22 ) );
notes.push( new Note( 'A', '', 1760.00 ) );
notes.push( new Note( 'A#', 'Bb', 1864.66 ) );
notes.push( new Note( 'B', '', 1975.53 ) );
notes.push( new Note( 'C', '', 2093.00 ) );
notes.push( new Note( 'C#', 'Db', 2217.46 ) );
notes.push( new Note( 'D', '', 2349.32 ) );
notes.push( new Note( 'D#', 'Eb', 2489.02 ) );
notes.push( new Note( 'E', '', 2637.02 ) );
notes.push( new Note( 'F', '', 2793.83 ) );
notes.push( new Note( 'F#', 'Gb', 2959.96 ) );
notes.push( new Note( 'G', '', 3135.96 ) );
notes.push( new Note( 'G#', 'Ab', 3322.44 ) );
notes.push( new Note( 'A', '', 3520.00 ) );
notes.push( new Note( 'A#', 'Bb', 3729.31 ) );
notes.push( new Note( 'B', '', 3951.07 ) );
notes.push( new Note( 'C', '', 4186.01 ) );
notes.push( new Note( 'C#', 'Db', 4434.92 ) );
notes.push( new Note( 'D', '', 4698.63 ) );
notes.push( new Note( 'D#', 'Eb', 4978.03 ) );
notes.push( new Note( 'E', '', 5274.04 ) );
notes.push( new Note( 'F', '', 5587.65 ) );
notes.push( new Note( 'F#', 'Gb', 5919.91 ) );
notes.push( new Note( 'G', '', 6271.93 ) );
notes.push( new Note( 'G#', 'Ab', 6644.88 ) );
notes.push( new Note( 'A', '', 7040.00 ) );
notes.push( new Note( 'A#', 'Bb', 7458.62 ) );
notes.push( new Note( 'B', '', 7902.13 ) );