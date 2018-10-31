$('#navcollapse').on('show.bs.collapse', function() {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, 10%)');
});

$('#navcollapse').on('hide.bs.collapse', function() {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
});