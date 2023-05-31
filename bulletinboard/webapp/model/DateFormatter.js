sap.ui.define([
    "sap/ui/base/Object",
    "sap/ui/core/format/DateFormat"
], function (Object, DateFormat) {
    return Object.extend("bulletinboard.model.DateFormatter", {
        constructor: function (oProperties) {
            this.timeFormat = DateFormat.getTimeInstance({
                style: "short"
            }, oProperties.locale);
        },
        format: function (oDate) {
            if (!oDate) {
                return "";
            }
            return this.timeFormat.format(oDate);
        }
    });
});