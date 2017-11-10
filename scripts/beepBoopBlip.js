let verbose = true;

let scale = [];

let playBeep = ( freq, len ) =>{
    let oscType = document.getElementById( 'oscillatorTypeIn' ).value;
    new Beep( oscType, freq, len );
}

let playScale = () =>{
    if( verbose ) console.log( 'in playScale' );
    let key = document.getElementById( 'keyIn' ).value;
    let noteCollectionName = document.getElementById( 'noteSetIn' ).value;
    if( verbose ) console.log( 'selection:', noteCollectionName, 'in', key );
    // get root note index
    let rootNoteIndex = 0;
    for( let i = 0; i < notes.length; i ++ ){
        if( notes[ i ].name == key ){
            rootNoteIndex = i;
            break;
        } //end if
    } //end for
    if( verbose ) console.log( 'rootNoteIndex:', rootNoteIndex );
    // get note intervals
    let noteCollection = {};
    for( let i = 0; i < noteCollections.length; i ++ ){
        if( noteCollections[ i ].name == noteCollectionName ){
            noteCollection = noteCollections[ i ];
            break;
        } //end found it
    } //end for
    if( verbose ) console.log( 'noteCollection:', noteCollection );
    // set scale
    let index = rootNoteIndex;
    scale = [ notes[ index ] ];
    let intervalIndex = -1;
    while( index < notes.length ){
        if( intervalIndex >= noteCollection.intervals.length-1 ) intervalIndex = -1;
        intervalIndex++;
        index += noteCollection.intervals[ intervalIndex ];
        scale.push( notes[ index ] );
    } //end for
    if( verbose ) console.log( 'scale:', scale );
    let delay = 100;
    for( let i = 0; i < scale.length-1; i++ ){
        let beepString = 'playBeep( scale[ ' + i + ' ].frequency, ' + delay/1000 + ' )';
        console.log( beepString );
        setTimeout( beepString, i*delay );
    } //end for
} // end funk

let setupInterface = () =>{
    if( verbose ) console.log( 'in setupInterface' );
    let select = document.getElementById( 'noteSetIn' );
    for( let i = 0; i< noteCollections.length ; i++ ){
        let opt = document.createElement( 'option' );
        opt.value = noteCollections[ i ].name;
        opt.innerHTML = noteCollections[ i ].name;
        select.appendChild( opt );
    } // end for
} // end funk