define([
    "../var/pnum"
], function (pnum) {
    return new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
});
//# sourceMappingURL=rcssNum.js.map