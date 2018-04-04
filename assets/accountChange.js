$(document).ready(function () {
    $('.gotoreal').click(function () {
        changeAccountType('real');
    });
    $('.gotodemo').click(function () {
        changeAccountType('demo');
    });

    function changeAccountType(type) {
        changing_process = true;

        activate = (type == 'demo');
        url = 'https://trading.finmaxbo.com/en/ajax/user/practice-mode?activate=' + activate + '&wow=true';
        $.ajax({
            url: url,
            dataType : "jsonp",
            type: "GET",
            global: false,
            success: function (data, textStatus) {
                if (data.success) {
                    if (type == 'demo') {
                        $(".gotoreal").show();
                        $(".gotodemo").hide();
                        $(".gotoreal-switcher").hide();
                        $(".gotodemo-switcher").show();
                        $("#start-demo-trade").show();

                        hostname = window.location.hostname;

                        $.ajax({
                            url: '/practiceWallet',
                            dataType : "json",
                            type: "GET",
                            global: false,
                            success: function (data, textStatus) {
                                if (data.success) {
                                    //
                                }
                            }
                        });
                    } else if (type == 'real') {
                        $(".gotoreal").hide();
                        $(".gotodemo").show();
                        $(".gotoreal-switcher").show();
                        $(".gotodemo-switcher").hide();
                        $("#start-demo-trade").hide();
                    }
                    var url = window.location.href;
                    if (url.indexOf('trades#') >= 0) {
                        window.location.reload(true);
                    }
                    changing_process = false;
                }
            }
        });
    }

});