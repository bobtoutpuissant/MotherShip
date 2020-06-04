function clickMap(id) {
    if (id !== 'W0' && id !== 'W1' && id !== 'W2') {
        $("input[name='search']").val(id);
        $("input[name='room']").click();
        console.log('que ça marche!')
    } else { console.log('il ny as rien') }
};