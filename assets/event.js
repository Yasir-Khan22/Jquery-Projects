$(document).ready(function () {
    $("#projects").tabs();
    $("ul").sortable({ axis: "x", containment: "#projects" });
    $("ol").sortable({ axis: "y", containment: "#projects" });
    $("#btnAddTask").button().click(function () {
        $("#task-dialog").dialog({
            width: 400, resizable: false, modal: true,
            buttons: {
                "add a task": function () {
                    $("#projects").tabs("refresh");
                    var activeTab = $("#projects").tabs("option", "active");
                    var title = $("#main > li:nth-child(" + (activeTab + 1) + ") > a").attr("href");
                    $("#projects " + title).append("<li><input type='checkbox'>" + $("#task").val() + "</li>");
                    $("#task").val("");
                    $(this).dialog("close");
                },
                "Cancel": function () {
                    $('#task').val("");
                    $(this).dialog("close");
                }
            }
        });
    });
    $("#addProjectBtn").button().click(function () {
        $("#project-dialog").dialog({
            width: 400, resizable: false, modal: true,
            buttons: {
                "Add a Project": function () {
                    var projectName = $('#project').val();
                    var replaceName = projectName.split(" ").join("_");
                    $("<li><a href='#" + replaceName + "'> " + projectName + "</a></li>")
                        .appendTo("#main");
                    $("<ol id='" + replaceName + "'></ol>").appendTo("#projects").sortable();
                    $("#projects").tabs("refresh");
                    var tabCount = $("#projects .ui-tabs-nav li").length;
                    $("#projects").tabs("option", "active", tabCount - 1);
                    $('#project').val("");
                    $(this).dialog("close");

                },
                "Cancel": function () {
                    $('#project').val("");
                    $(this).dialog("close");
                }
            }
        });
    });
});