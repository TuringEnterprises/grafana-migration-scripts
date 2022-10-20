#!/usr/bin/env node
var program = require("commander");
var dashboardMigration = require("../lib/dashboard.migration.js");
var { version } = require("../package.json");
var { readFileSync } = require("fs");

program
    .name('asd')
    .version(version)
    .option("-e, --string", "read arguments as strings instead of files")
    .parse(process.argv);

if (!program.args.length) {
    var stdin = process.openStdin();
    let input = "";

    stdin.on("data", function (chunk) {
        input += chunk;
    });

    stdin.on("end", function () {
        process.stdout.write(dashboardMigration(input));
        process.stdout.write("\n");
    });
}
else {
    program.args.forEach(function (str) {
        if (program.string) {
            process.stdout.write(dashboardMigration(str));
        }
        else {
            process.stdout.write(dashboardMigration(readFileSync(str, "utf8")));
        }
    });

    process.stdout.write("\n");
}