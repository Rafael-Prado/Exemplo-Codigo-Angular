function getFormattedDate(date) {
    var re = /-?\d+/;
    var m = re.exec(date);
    var d = new Date(parseInt(m[0], 10));
    return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
}

var dCad = getFormattedDate(data.agendamento.DataCadastro);
console.log(dCad);