$(document).ready(() => {
    const containerEl = document.querySelector('.container');

    $('.container').on('click', handleClick);
    
    function handleClick(event) {

        const tilesEl = containerEl.querySelectorAll('.tile');
        
        const clickedTile = event.target.closest('.tile');

        const clickedTileIndex  = $(clickedTile).index()
            
        // console.log(clickedTileIndex);

        const isEmpty = tilesEl[clickedTileIndex + 1].classList.contains('empty');
        
        console.log(isEmpty);
        
        if (isEmpty) {
            containerEl.insertBefore(tilesEl[clickedTileIndex + 1], tilesEl[clickedTileIndex]);
          }
        
        const isEmptyBackwards = tilesEl[clickedTileIndex - 1].classList.contains('empty');
        // console.log(isEmptyBackwards);
        
          if (isEmptyBackwards) {
            containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[clickedTileIndex - 1]);
          }
        
        }
  })





