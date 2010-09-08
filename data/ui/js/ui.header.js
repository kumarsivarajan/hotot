if (typeof ui == 'undefined') var ui = {};
ui.Header = {

init:
function init () {
    $('#btn_hotot_wrap').hover(
    function (event) {
        $('#btn_hotot').addClass('hover');
    },
    function (event) {
        $('#btn_hotot').removeClass('hover');
        $('#hotot_menu').hide();
    }).click(
    function (event) {
        $('#hotot_menu').toggle();
    });

    $('#btn_prefs').click(
    function (event) {
        ui.DialogHelper.open(ui.PrefsDlg);
    });
    
    $('#btn_exts').click(
    function (event) {
        ui.DialogHelper.open(ui.ExtsDlg);
    });

    $('#btn_about').click(
    function (event) {
        ui.DialogHelper.open(ui.AboutDlg);
    });

    $('#btn_sign_out').click(
    function (event) {
        globals.layout.close('north');
        globals.layout.close('south');
        ui.Main.hide();
        ui.Welcome.show();
    });
},

};


