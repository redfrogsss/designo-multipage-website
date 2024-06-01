function getRichText(data: any) {
    if (data == undefined) return;
    let html = "";

    data.forEach((item: any) => {
        if (item.type == "paragraph") {

            let paraHTML = "";

            item.children.forEach((child: any) => {
                if (child.type == "text") {
                    let text = child.text == "" ? "&nbsp;" : child.text;
                    if (child.bold == true) {
                        text = `<b>${text}</b>`;
                    }
                    paraHTML += text;
                }
            });
            
            html += `<p>${paraHTML}</p>`;
        }
        
        if (item.type == "heading") {
            let tag = `h${item.level}`;
            
            item.children.forEach((child: any) => {
                if (child.type == "text") {
                    html += `<${tag}>${child.text == "" ? "&nbsp;" : child.text}</${tag}>`;
                }
            });
        }
    });

    return html;
}

export { getRichText }