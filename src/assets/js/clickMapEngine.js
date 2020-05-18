function clickMap(id) {
    $("input[name='search']").val(id);
    $("input[name='room']").click();
    console.log('que ça marche!')
};