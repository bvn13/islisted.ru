jQuery(document).ready(function ($) {

    'use strict';

    /************** Mixitup (Filter Projects) *********************/
    $('.projects-holder').mixitup({
        effects: ['fade', 'grayscale'],
        easing: 'snap',
        transitionSpeed: 400
    });

    $(document).ready(function () {
        $.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: 'http://localhost:8080/get-preview-records',
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
        
                //$('#inoagents').DataTable();
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });

});