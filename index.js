function click_day() {
    document.getElementById("day_icon").style.opacity = "100%";
    document.getElementById("week_icon").style.opacity = "30%";
    document.getElementById("month_icon").style.opacity = "30%";

    document.getElementById("day_graph").style.opacity = "100%";
    document.getElementById("week_graph").style.opacity = "0%";
    document.getElementById("month_graph").style.opacity = "0%";
}

function click_week() {
    document.getElementById("day_icon").style.opacity = "30%";
    document.getElementById("week_icon").style.opacity = "100%";
    document.getElementById("month_icon").style.opacity = "30%";

    document.getElementById("day_graph").style.opacity = "0%";
    document.getElementById("week_graph").style.opacity = "100%";
    document.getElementById("month_graph").style.opacity = "0%";
}

function click_month() {
    document.getElementById("day_icon").style.opacity = "30%";
    document.getElementById("week_icon").style.opacity = "30%";
    document.getElementById("month_icon").style.opacity = "100%";

    document.getElementById("day_graph").style.opacity = "0%";
    document.getElementById("week_graph").style.opacity = "0%";
    document.getElementById("month_graph").style.opacity = "100%";

}