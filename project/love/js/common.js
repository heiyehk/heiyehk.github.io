let common = {
    typeing(data){
        let [inter, index, html,wait] = [null, 0, '', 0];
        const node = document.querySelector(data.node);
        if(data.text == '') return;
        inetr = setInterval(() => {
            wait += 1;
            if(wait <= 6){
                if(wait % 2 == 1){
                    node.innerHTML = '_';
                } else {
                    node.innerHTML = ' '
                }
                return false;
            }
            if(data.typeings && typeof data.typeings == 'function'){
                data.typeings(inetr)
            }
            html = html.slice(0,index);
            index += 1;
            html += data.text[index - 1] + '_';
            node.innerHTML = html;
            if(index == data.text.length){
                if(data.success && typeof data.success == 'function'){
                    data.success(inetr,html);
                    return;
                }
                index = 0;
                html = '';
                node.innerHTML = '';
            }
        },data.number ? data.number : 500)
    }
}