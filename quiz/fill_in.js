arr = [
    [17, 18, 25, 42, 50, 50, 10, 10, 18, 19, 42, 61, 50, 50, 10, 10], //111
    [17, 35, 25, 25, 50, 50, 10, 10, 35, 72, 25, 25, 50, 50, 10, 10], //112
    [17, 18, 25, 26, 50, 93, 10, 10], //113
    [17, 18, 25, 26, 50, 51, 10, 92, 18, 19, 26, 27, 51, 52, 92, 98], //114
    [17, 1142, 25, 1125, 50, 45, 10, 10, 1142, 46142, 1125, 45000, 45, 40, 10, 46142], //115
    [17, 17, 25, 25, 50, 50, 10, 10, 17, 18, 25, 25, 50, 50, 10, 10, 18, 19, 25, 25, 50, 50, 10, 8, 19, 19, 25, 25, 50, 50, 8, 1], //116
    [17, 119, 25, 25, 50, 50, 10, 119, 119, 5950, 25, 25, 50, 50, 119, 243], //117
    [17, 18, 25, 25, 50, 50, 10, 10, 18, 19, 25, 25, 50, 50, 10, 10] //118
];
/*
arr = [
    [41, 41, 36], //119
    [122, 14, 36], //120
    [-1440, 0.00100000005, -81.7529984], //121
    [-39.0009995], //122
    [-2.2709167], //123
    [36, -117.752998, -117.752998, -81.7529984], //124
    [1], //125
    [0], //126
    [0], //127
    [1] //128
];*/

current = 111;
end = 118;
for (var i = 0; i < arr.length; i++) {
    num = 0;
    $("[name='answer["+current+"][]']").each(function(j, obj) {
        $(this).val(arr[i][num]);
        num++;
    });
    current++;
}

//Show case id
/*
$('[href^=#question-]').each(function(i, obj) {
    old_text = $(this).html();
    id = $(this).attr("href").slice(-3);
    $(this).html(old_text + "(" + id + ")");
});
*/