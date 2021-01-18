function displaySudoku() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            $(`#line${i}-${j}`).text(sudoku[i][j])
        }
    }
}

function showSorryMessage() {
    $('#congrats #text').show();
    setTimeout(function() {
        $('#text').fadeOut(1000);
    }, 2000);
}

$(document).ready(function() {
    $("#generate").click(function() {
        generateSudoku();
        displaySudoku();
        $("#solve").click(function() {
            showSorryMessage()

        })
    })

})