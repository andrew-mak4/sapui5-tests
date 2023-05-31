sap.ui.define([
    "bulletinboard/model/DateFormatter",
    "sap/ui/core/Locale",
    "sap/ui/core/date/UI5Date"
], function (DateFormatter, Locale, UI5Date) {
    var oFormatter = null;
    QUnit.module("DateFormatter", {
        beforeEach: function () {
            oFormatter = new DateFormatter({
                now: function () {
                    return UI5Date.getInstance().getTime()
                },
                locale: new Locale("en-US")
            });
        }
    });
    QUnit.test("Should return empty string if no date is given", function (assert) {
        var sFormattedDate = oFormatter.format(null);
        assert.strictEqual(sFormattedDate, "");
    });

    QUnit.test("Should return time if date from today", function (assert) {
        var oDate = UI5Date.getInstance(2023, 4, 31, 15, 22, 0);
        // today’s date dependent case
        var sFormattedDate = oFormatter.format(oDate);
        assert.strictEqual(sFormattedDate, "3:22 PM");
    });

    QUnit.test("Should return 'Yesterday' if date from yesterday", function (assert) {
        var oDate = UI5Date.getInstance(UI5Date.getInstance().getTime() - 24 * 3600 * 1000);
        // var oDate = UI5Date.getInstance(2023, 4, 30);
        // today’s date dependent case
        var sFormattedDate = oFormatter.format(oDate);
        assert.strictEqual(sFormattedDate, "Yesterday");
    });

    QUnit.test("Should return day of the week if date < 7 days ago", function (assert) {
        var oDate = UI5Date.getInstance(2023, 4, 28);
        // today’s date dependent case
        var sFormattedDate = oFormatter.format(oDate);
        assert.strictEqual(sFormattedDate, "Sunday");
    });

    QUnit.test("Should return date w/o time if date > 7 days ago", function (assert) {
        var oDate = UI5Date.getInstance(2023, 3, 12);
        var sFormattedDate = oFormatter.format(oDate);
        assert.strictEqual(sFormattedDate, "Apr 12, 2023");
    });
});