function EventManager() {
    this.addRemoveModeButtonEvent = function (selector) {
        $(selector).on('click', function () {
            if ($(ids.statuses).data("mode-remove") === "off") {
                $(ids.mainFrame).addClass("remove-mode-on");
                $(classes.removeModeIndicator).removeClass("btn-danger");
                $(classes.removeModeIndicator).addClass("btn-success");
                $(classes.removeModeIndicator).text("ON");
                $(ids.statuses).data("mode-remove", "on");
                $(this).blur();
            } else {
                $(ids.mainFrame).removeClass("remove-mode-on");
                $(classes.removeModeIndicator).removeClass("btn-success");
                $(classes.removeModeIndicator).addClass("btn-danger");
                $(classes.removeModeIndicator).text("OFF");;
                $(ids.statuses).data("mode-remove", "off");
                $(this).blur();
            }
        });
    };
    this.addClickOnFrameEvent = function (selector) {
        $(selector).on('onmousedown', function () {
            $(classes.objectSelected).text("clicked on clear space");
        });
    };
}
