var dt = new Date().toLocaleString(
    'default', {weekday: 'long'}
);

if (dt == "hétfő") {
    document.getElementById("hetfo").innerHTML = 'Hétfő (mai nap)';
}

if (dt == "kedd") {
    document.getElementById("kedd").innerHTML = 'Kedd (mai nap)';
}

if (dt == "szerda") {
    document.getElementById("szerda").innerHTML = 'Csütörtök (mai nap)';
}

if (dt == "csütörtök") {
    document.getElementById("csutortok").innerHTML = 'Csütörtök (mai nap)';
}

if (dt == "péntek") {
    document.getElementById("pentek").innerHTML = 'Péntek (mai nap)';
}