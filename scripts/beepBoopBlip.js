let verbose = false;

let playScale = () =>{
    if( verbose ) console.log( 'in playScale' );
    let key = document.getElementById( 'keyIn' ).value;
    let noteCollection = document.getElementById( 'noteSetIn' ).value;
    if( verbose ) console.log( 'selection:', noteCollection, 'in', key );
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