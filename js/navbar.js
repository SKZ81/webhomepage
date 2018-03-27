var menu_items = ['cv', 'skills', 'about_me', 'around_the_web'];
var languages=['en', 'fr']




function setup_navbar(currentPage, language /* TODO : rather read html node 'lang' attribute */) {
    $("#navbar").load("navbar." + language + ".html", function() {
        // code to be executed as a CALLBACK, once loaded
        $("#lang_flag_indicator").attr("lang", language);
        menu_items.forEach(function(item) {
            if (currentPage != item) {
//                 console.log("set " + item + " link to " + item + '.' + language + ".html");
                $('#link_'+item).attr("href", item + '.' + language + '.html');
            } else {
//                 console.log("let " + item + " link be #");
            }
        });

        if ($("#item_" + currentPage).length) {
//             console.log("highlight " + currentPage + " item");
            $("#item_" + currentPage).addClass("active");
        }

        languages.forEach(function(lang) {
            if (language != lang) {
//                 console.log("link to " + lang + ' is now ' + currentPage + '.' + lang + '.html');
                $('#linkto_'+lang).attr("href", currentPage + '.' + lang + '.html');
            } else {
//                 console.log("link to " + lang + ' is still #');
            }
        });

    });
}

