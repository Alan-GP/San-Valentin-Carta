$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
            $('#myDialog').modal('show');
    }
    function close() {
        envelope.addClass("close")
            .removeClass("open");
            
    }

    // Cierra el modal cuando se hace clic en el botón de cierre
        $('.close').click(function () {
            $('#myDialog').modal('hide');
        });

});