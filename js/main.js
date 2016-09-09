// <reference path="js/sweetalert.d.ts"/>
function getsong() {
    var sid = Math.floor(Math.random() * 10000) + 1;
    swal({ title: "Getting data for you!", closeOnConfirm: true, showConfirmButton: true });
    var request = $.ajax({
        type: "get",
        dataType: "jsonp",
        jsonp: "callback",
        url: "https://api.lostg.com/music/" + sid,
        data: {
            lyric: 1
        } });
    request.done(function (b) {
        sweetAlert("Your song for the day is " + b.title + " by " + b.singer + " from album " + b.album);
    });
    request.fail(function (b) {
        getsong();
    });
}
