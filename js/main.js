jQuery(document).ready(function ($) {

    'use strict';

    $(document).ready(function () {
        /************** Mixitup (Filter Projects) *********************/
        $('.projects-holder').mixitup({
            effects: ['fade', 'grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });

        /*************************************************************/
        $('#form-submit').click(function(e) {
            var checkClose, checkLoaded, event, href, i, len, loadEvents, results, t, wndw;
            e.preventDefault();
            var email = $('#email')[0].value;
            var subject = $('#subject')[0].value;
            var message = $('#message')[0].value;
            href = 'mailto:' + email + '?subject=' + subject + '&body=' + message;
            console.log(href);
            wndw = window.open(href, 'mail');
            checkClose = function () {
                console.log('checkClose');
                try {
                    wndw.location.href;
                    return wndw.close();
                } catch (error) {
                    return console.log('webmail');
                }
            };
            t = setTimeout(checkClose, 5000);
            try {
                checkLoaded = function () {
                    console.log('loaded');
                    clearTimeout(t);
                    return t = setTimeout(checkClose, 2000);
                };
                wndw.onload = checkLoaded;
                loadEvents = ["DomContentLoaded", "load", "beforeunload", "unload"];
                results = [];
                for (i = 0, len = loadEvents.length; i < len; i++) {
                    event = loadEvents[i];
                    results.push(wndw.addEventListener(event, checkLoaded));
                }
                return results;
            } catch (error) {
                return checkLoaded();
            }
        });


        /************** Inoagents Table Loading *********************/
        $.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: 'https://api.islisted.ru/get-preview-records',
            success: function (data) {
                var items = [];
                $.each(data, function (i, item) {
                    items.push("" +
                        "<tr>" +
                        "<td>" + item['name'] + "</td>" +
                        "<td>" + item['birthday'] + "</td>" +
                        "<td>" + item['ogrn'] + "</td>" +
                        "<td>" + item['inn'] + "</td>" +
                        "<td>" + item['registration_number'] + "</td>" +
                        "<td>" + item['snils'] + "</td>" +
                        "<td>" + item['address'] + "</td>" +
                        "<td>" + item['information_resource'] + "</td>" +
                        "<td>" + item['full_name'] + "</td>" +
                        "<td>" + item['inclusion_description'] + "</td>" +
                        "<td>" + item['inclusion_date'] + "</td>" +
                        "<td>" + item['publication_date'] + "</td>" +
                        "<td>" + item['exclusion_date'] + "</td>" +
                        "</tr>")
                });

                $("<tbody>", {
                    html: items.join("")
                }).appendTo("#inoagents");
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });

});