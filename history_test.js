const gjsunit = imports.gjsunit;

let suite = new gjsunit.Suite("history.js");

let check_cases = [
    {x: 1047, y: 555}, {x: 925, y: 603}, {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723},
    {x: 672, y: 725}, {x: 722, y: 703}, {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507},
    {x: 1176, y: 505}, {x: 1116, y: 536}, {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628},
    {x: 943, y: 629}, {x: 946, y: 627}, {x: 1047, y: 555}, {x: 925, y: 603}, {x: 814, y: 654},
    {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703}, {x: 840, y: 643},
    {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536}, {x: 992, y: 600},
    {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627}, {x: 952, y: 624},
    {x: 1047, y: 555}, {x: 925, y: 603}, {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723},
    {x: 672, y: 725}, {x: 722, y: 703}, {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507},
    {x: 1176, y: 505}, {x: 1116, y: 536}, {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628},
    {x: 943, y: 629}, {x: 946, y: 627}, {x: 952, y: 624}, {x: 956, y: 621}, {x: 1047, y: 555},
    {x: 925, y: 603}, {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725},
    {x: 722, y: 703}, {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505},
    {x: 1116, y: 536}, {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629},
    {x: 946, y: 627}, {x: 952, y: 624}, {x: 956, y: 621}, {x: 1047, y: 555}, {x: 925, y: 603},
    {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703},
    {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536},
    {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627},
    {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 1047, y: 555}, {x: 925, y: 603},
    {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703},
    {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536},
    {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627},
    {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 1047, y: 555}, {x: 925, y: 603},
    {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703},
    {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536},
    {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627},
    {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 1047, y: 555}, {x: 925, y: 603},
    {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703},
    {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536},
    {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627},
    {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 1047, y: 555}, {x: 925, y: 603},
    {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703},
    {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536},
    {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627},
    {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 1047, y: 555}, {x: 925, y: 603},
    {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703},
    {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536},
    {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627},
    {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 1047, y: 555}, {x: 925, y: 603},
    {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703},
    {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536},
    {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627},
    {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 925, y: 603}, {x: 814, y: 654},
    {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703}, {x: 840, y: 643},
    {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536}, {x: 992, y: 600},
    {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627}, {x: 952, y: 624},
    {x: 956, y: 621}, {x: 957, y: 620}, {x: 925, y: 603}, {x: 814, y: 654}, {x: 698, y: 710},
    {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703}, {x: 840, y: 643}, {x: 1118, y: 528},
    {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536}, {x: 992, y: 600}, {x: 950, y: 625},
    {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627}, {x: 952, y: 624}, {x: 956, y: 621},
    {x: 957, y: 620}, {x: 814, y: 654}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725},
    {x: 722, y: 703}, {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505},
    {x: 1116, y: 536}, {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629},
    {x: 946, y: 627}, {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 698, y: 710},
    {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703}, {x: 840, y: 643}, {x: 1118, y: 528},
    {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536}, {x: 992, y: 600}, {x: 950, y: 625},
    {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627}, {x: 952, y: 624}, {x: 956, y: 621},
    {x: 957, y: 620}, {x: 698, y: 710}, {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703},
    {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536},
    {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627},
    {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 675, y: 723}, {x: 672, y: 725},
    {x: 722, y: 703}, {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507}, {x: 1176, y: 505},
    {x: 1116, y: 536}, {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628}, {x: 943, y: 629},
    {x: 946, y: 627}, {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620}, {x: 675, y: 723},
    {x: 672, y: 725}, {x: 722, y: 703}, {x: 840, y: 643}, {x: 1118, y: 528}, {x: 1170, y: 507},
    {x: 1176, y: 505}, {x: 1116, y: 536}, {x: 992, y: 600}, {x: 950, y: 625}, {x: 944, y: 628},
    {x: 943, y: 629}, {x: 946, y: 627}, {x: 952, y: 624}, {x: 956, y: 621}, {x: 957, y: 620},
    {x: 675, y: 723}, {x: 672, y: 725}, {x: 722, y: 703}, {x: 840, y: 643}, {x: 1118, y: 528},
    {x: 1170, y: 507}, {x: 1176, y: 505}, {x: 1116, y: 536}, {x: 992, y: 600}, {x: 950, y: 625},
    {x: 944, y: 628}, {x: 943, y: 629}, {x: 946, y: 627}, {x: 952, y: 624}, {x: 956, y: 621},
];

suite.addTest("check", function() {
    let history = imports.history;
    // no history means no jiggling
    gjsunit.assertFalse(history.check());
    // add some history
    for (let i = 0; i < check_cases.length; i++) {
        history.push(check_cases[i].x, check_cases[i].y);
    }
    // confirm jiggle
    gjsunit.assertTrue(history.check());
});
