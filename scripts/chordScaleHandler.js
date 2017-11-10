class NoteCollection {
    constructor( name, description, intervals ) {
        this.name = name;
        this.description = description;
        this.intervals = intervals;
        return this;
    }
}

let noteCollections = [
    new NoteCollection( 'chromatic', 'all 12 notes', [ 1 ] ),
    new NoteCollection( 'diatonic', 'just yer basic major scale', [ 2, 2, 1, 2, 2, 2, 1 ] ),
    new NoteCollection( 'major triad', 'major chord', [ 4, 3, 5, ] ),
    new NoteCollection( 'minor triad', 'major chord', [ 3, 4, 5, ] ),
    new NoteCollection( 'dominant 7', 'major chord with dominant 7th', [ 4, 3, 3, 2 ] ),
    new NoteCollection( 'minor 7', 'minor chord with dominant 7th', [ 3, 4, 3, 2 ] ),
    new NoteCollection( 'major 7', 'major chord with major 7th', [ 4, 3, 4, 1 ] ),
    new NoteCollection( 'minor 7 b5', 'aka half-dimished', [ 3, 3, 4, 2 ] ),
    new NoteCollection( 'diminished 7', 'all 1.5 steps', [ 3, 3, 3, 3 ] )
]

